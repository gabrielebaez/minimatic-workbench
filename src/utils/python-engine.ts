/**
 * Pyodide (Python WASM) Client Runner
 * Dynamically loads Pyodide CDN script on demand and executes Python code in-browser.
 */

declare global {
  interface Window {
    loadPyodide?: () => Promise<any>;
  }
}

let pyodidePromise: Promise<any> | null = null;

function loadPyodideScript(): Promise<any> {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.loadPyodide) {
      resolve(window.loadPyodide());
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
    script.onload = async () => {
      try {
        if (window.loadPyodide) {
          const py = await window.loadPyodide();
          resolve(py);
        } else {
          reject(new Error('window.loadPyodide undefined'));
        }
      } catch (err) {
        reject(err);
      }
    };
    script.onerror = () => reject(new Error('Failed to load Pyodide CDN script'));
    document.head.appendChild(script);
  });
  return pyodidePromise;
}

export async function runPythonCode(code: string, outputElementId: string): Promise<void> {
  const container = document.getElementById(outputElementId);
  if (!container) return;

  container.innerHTML = `<div style="color: #95908d; font-size: 13px; font-family: monospace;">⏳ Loading Python Pyodide WASM runtime...</div>`;

  try {
    const pyodide = await loadPyodideScript();
    let logs: string[] = [];
    pyodide.setStdout({ batched: (str: string) => logs.push(str) });
    pyodide.setStderr({ batched: (str: string) => logs.push('ERROR: ' + str) });

    const result = await pyodide.runPythonAsync(code);

    let outputHtml = '';
    if (logs.length > 0) {
      outputHtml += `<div style="background: #1b1c1c; color: #a8d5c4; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 13px; white-space: pre-wrap;">${logs.join('\n')}</div>`;
    }
    if (result !== undefined && result !== null) {
      outputHtml += `<div style="margin-top: 8px; color: #17805e; font-family: monospace; font-weight: 600; font-size: 13px;">Return value: ${result}</div>`;
    }
    if (!outputHtml) {
      outputHtml = `<div style="color: #95908d; font-size: 13px;">Python code executed cleanly (no stdout output).</div>`;
    }

    container.innerHTML = outputHtml;
  } catch (err: any) {
    container.innerHTML = `<div style="background: #ffcdd2; color: #b71c1c; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 13px; white-space: pre-wrap;">Traceback error:\n${err.message || err}</div>`;
  }
}
