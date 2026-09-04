/**
 * Minimatic Client Interpreter (Eve Analyzer Style)
 * Parses reactive minimatic code blocks and returns interactive state tables & data analyzers.
 */

declare global {
  interface Window {
    runMinimaticAction?: (wId: string, bIdx: number, rawAction: string) => void;
  }
}

export function renderMinimatic(code: string): string {
  const lines = code.split('\n').map(l => l.trim()).filter(Boolean);
  
  let initialState = 0;
  let stateName = 'val';
  const buttons: { label: string; action: string }[] = [];
  const definitions: string[] = [];

  lines.forEach(line => {
    if (line.startsWith('state')) {
      const parts = line.replace('state', '').trim().split('=');
      if (parts.length === 2) {
        stateName = parts[0].trim();
        initialState = parseInt(parts[1].trim(), 10) || 0;
      }
    } else if (line.startsWith('button')) {
      const match = line.match(/button\s+"([^"]+)"\s*=>\s*(.+)/);
      if (match) {
        buttons.push({ label: match[1], action: match[2].trim() });
      }
    } else if (line.includes('=')) {
      definitions.push(line);
    }
  });

  const widgetId = 'mini_analyzer_' + Math.random().toString(36).substr(2, 6);

  let html = `
    <div id="${widgetId}" style="background: #ffffff; border: 1px solid #c7c4c2; border-radius: 12px; padding: 18px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
      <!-- Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e9ded8; padding-bottom: 10px; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="background: #17805e; width: 8px; height: 8px; border-radius: 50%;"></span>
          <span style="font-family: 'Bricolage Grotesque', sans-serif; font-weight: 700; color: #17805e; font-size: 15px;">🔍 Minimatic State Analyzer</span>
        </div>
        <span style="font-family: monospace; font-size: 11px; background: #f7f2eb; color: #17805e; padding: 2px 8px; border-radius: 4px; border: 1px solid #c7c4c2;">analyzer.eve mode</span>
      </div>

      <!-- State Inspector Card -->
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px; background: #f7f2eb; padding: 12px 16px; border-radius: 8px; border: 1px solid #e9ded8;">
        <div>
          <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #95908d;">Variable</div>
          <div style="font-family: monospace; font-weight: 700; color: #1b1c1c; font-size: 15px;">${stateName}</div>
        </div>
        <div style="height: 24px; width: 1px; background: #c7c4c2;"></div>
        <div>
          <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #95908d;">Current State</div>
          <div id="${widgetId}_state" style="font-family: monospace; font-weight: 700; color: #17805e; font-size: 18px;">${initialState}</div>
        </div>
      </div>

      <!-- Actions -->
      ${buttons.length > 0 ? `
        <div style="font-size: 11px; font-weight: 700; color: #95908d; text-transform: uppercase; margin-bottom: 8px;">Triggers / Mutators</div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
          ${buttons.map((b, idx) => `
            <button onclick="window.runMinimaticAction('${widgetId}', ${idx}, '${encodeURIComponent(b.action)}')" style="background: #17805e; color: #ffffff; border: none; padding: 6px 14px; border-radius: 9999px; font-family: Inter, sans-serif; font-weight: 600; font-size: 12px; cursor: pointer; transition: all 0.2s ease;">
              ${b.label}
            </button>
          `).join('')}
        </div>
      ` : ''}

      <!-- Output Value Box -->
      <div id="${widgetId}_box" style="transition: all 0.2s ease; background: #0d4a38; color: #a8d5c4; padding: 10px 14px; border-radius: 8px; font-family: monospace; font-size: 13px; border: 1px solid #17805e;">
        Evaluated (${stateName}): ${initialState}
      </div>
    </div>
  `;

  if (typeof window !== 'undefined' && !window.runMinimaticAction) {
    window.runMinimaticAction = function(wId: string, bIdx: number, rawAction: string) {
      const stateEl = document.getElementById(wId + '_state');
      const boxEl = document.getElementById(wId + '_box');
      if (!stateEl) return;
      let curr = parseInt(stateEl.innerText, 10) || 0;
      const act = decodeURIComponent(rawAction);
      if (act.includes('+')) {
        const num = parseInt(act.split('+')[1], 10) || 1;
        curr += num;
      } else if (act.includes('-')) {
        const num = parseInt(act.split('-')[1], 10) || 1;
        curr -= num;
      } else {
        curr = parseInt(act, 10) || 0;
      }
      stateEl.innerText = String(curr);
      if (boxEl) {
        boxEl.innerText = `Evaluated (${stateName}): ${curr}`;
      }
    };
  }

  return html;
}
