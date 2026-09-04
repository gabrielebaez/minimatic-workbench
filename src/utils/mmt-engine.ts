/**
 * MMT (Minimal Markup Transform) Client Interpreter
 * Parses MMT blocks into visual SVG diagrams and structured UI components.
 */

interface Link {
  from: string;
  to: string;
}

interface TableRow {
  key: string;
  value: string;
}

interface TableData {
  title: string;
  rows: TableRow[];
}

export function renderMMT(code: string): string {
  const lines = code.split('\n').map(l => l.trim()).filter(Boolean);
  let title = 'MMT Diagram';
  const nodes: string[] = [];
  const links: Link[] = [];
  const tables: TableData[] = [];
  let currentTable: TableData | null = null;

  lines.forEach(line => {
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
    } else if (line.startsWith('node:')) {
      const content = line.replace('node:', '').trim();
      if (content.includes('->')) {
        const parts = content.split('->').map(p => p.trim());
        links.push({ from: parts[0], to: parts[1] });
        parts.forEach(p => {
          const name = p.split('[')[0].trim();
          if (!nodes.includes(name)) nodes.push(name);
        });
      } else {
        const name = content.split('[')[0].trim();
        if (!nodes.includes(name)) nodes.push(name);
      }
    } else if (line.startsWith('table:')) {
      if (currentTable) tables.push(currentTable);
      currentTable = { title: line.replace('table:', '').trim(), rows: [] };
    } else if (line.includes('|') && currentTable) {
      const [k, v] = line.split('|').map(s => s.trim());
      currentTable.rows.push({ key: k, value: v });
    }
  });

  if (currentTable) tables.push(currentTable);

  let svgContent = '';
  if (nodes.length > 0) {
    const nodeX: Record<string, { x: number; y: number }> = {};
    const width = 500;
    const height = 120 + Math.ceil(nodes.length / 3) * 60;
    
    nodes.forEach((node, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      nodeX[node] = { x: 70 + col * 170, y: 50 + row * 80 };
    });

    let linesSvg = '';
    links.forEach(link => {
      const fromName = link.from.split('[')[0].trim();
      const toName = link.to.split('[')[0].trim();
      if (nodeX[fromName] && nodeX[toName]) {
        const f = nodeX[fromName];
        const t = nodeX[toName];
        linesSvg += `<line x1="${f.x}" y1="${f.y}" x2="${t.x}" y2="${t.y}" stroke="#17805e" stroke-width="2.5" stroke-dasharray="4" />`;
      }
    });

    let boxesSvg = '';
    nodes.forEach(node => {
      const { x, y } = nodeX[node];
      boxesSvg += `
        <g transform="translate(${x - 60}, ${y - 22})">
          <rect width="120" height="44" rx="22" fill="#a8d5c4" stroke="#17805e" stroke-width="2" />
          <text x="60" y="26" text-anchor="middle" fill="#0d4a38" font-family="Inter, sans-serif" font-weight="600" font-size="13">${node}</text>
        </g>
      `;
    });

    svgContent = `
      <div style="background: #f7f2eb; border: 1px solid #c7c4c2; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
        <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 16px; font-weight: 700; color: #17805e; margin-bottom: 12px;">📐 ${title}</div>
        <svg viewBox="0 0 ${width} ${height}" style="width: 100%; height: auto; display: block;">
          ${linesSvg}
          ${boxesSvg}
        </svg>
      </div>
    `;
  }

  let tablesHtml = '';
  tables.forEach(tbl => {
    const rowsHtml = tbl.rows.map(r => `
      <tr style="border-bottom: 1px solid #e9ded8;">
        <td style="padding: 8px 12px; font-weight: 600; color: #1b1c1c;">${r.key}</td>
        <td style="padding: 8px 12px; color: #17805e; font-family: monospace; font-weight: 600;">${r.value}</td>
      </tr>
    `).join('');

    tablesHtml += `
      <div style="background: #ffffff; border: 1px solid #c7c4c2; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
        <div style="font-family: 'Bricolage Grotesque', sans-serif; font-weight: 700; font-size: 15px; margin-bottom: 8px;">📊 ${tbl.title}</div>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    `;
  });

  if (!svgContent && !tablesHtml) {
    return `<div style="padding: 12px; background: #f7f2eb; border-radius: 8px; font-family: monospace; color: #95908d;">[MMT] Code rendered. Add 'node:' or 'table:' definitions to generate visual model.</div>`;
  }

  return svgContent + tablesHtml;
}
