const P = { gold: ['#f6dc90', '#c9a54c', '#8f6a1d'], silver: ['#fdfdfd', '#b9bac0', '#7c7d85'] };
const bez = (t, a, b, c, d) => (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * d;
export default function Art({ type = 'ring', tone = 'gold', label }) {
  const c = P[tone], id = `m-${tone}`, m = `url(#${id})`;
  const st = { fill: 'none', stroke: m, strokeLinecap: 'round' };
  const Ring = ({ t }) => (<g transform={t}>
    <ellipse cx="200" cy="190" rx="62" ry="58" {...st} strokeWidth="14" />
    <path d="M170 128l16-26h28l16 26-30 34z" fill="#fffdf6" stroke={c[2]} strokeWidth="2" />
    <path d="M170 128h60M186 102l14 60 14-60" stroke={c[1]} strokeWidth="1.2" fill="none" /></g>);
  const Ear = ({ t }) => (<g transform={t}>
    <circle cx="0" cy="70" r="10" fill={m} /><path d="M0 80v26" {...st} strokeWidth="4" />
    <path d="M-30 150c0-28 14-38 30-38s30 10 30 38c0 12-13 20-30 20s-30-8-30-20z" fill={m} />
    <path d="M-16 150h32" stroke={c[2]} strokeWidth="2" opacity=".5" />
    {[-16, 0, 16].map((x) => <circle key={x} cx={x} cy="184" r="5" fill={m} />)}</g>);
  const Ban = ({ t }) => (<g transform={t}>{[0, 1, 2].map((i) => (<g key={i}>
    <ellipse cx="200" cy={105 + i * 40} rx="110" ry="34" {...st} strokeWidth="11" />
    <ellipse cx="200" cy={105 + i * 40} rx="110" ry="34" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeDasharray="1 13" strokeLinecap="round" /></g>))}</g>);
  const Neck = ({ t }) => (<g transform={t}>
    <path d="M70 70C90 240 310 240 330 70" {...st} strokeWidth="5" />
    {Array.from({ length: 14 }, (_, i) => { const k = 0.08 + i * 0.06; return <circle key={i} cx={bez(k, 70, 90, 310, 330)} cy={bez(k, 70, 240, 240, 70)} r="5.5" fill={m} />; })}
    <path d="M200 206c-22 14-22 44 0 62 22-18 22-48 0-62z" fill={m} stroke={c[2]} strokeWidth="1.5" /><circle cx="200" cy="236" r="6" fill="#fffdf6" /></g>);
  const Coin = ({ x, y }) => (<g><circle cx={x} cy={y} r="72" fill={m} stroke={c[2]} strokeWidth="2" />
    <circle cx={x} cy={y} r="56" fill="none" stroke={c[2]} strokeWidth="2" strokeDasharray="3 6" />
    <text x={x} y={y + 18} textAnchor="middle" fontFamily="Georgia,serif" fontSize="52" fontWeight="700" fill={c[2]}>₹</text></g>);
  const body = {
    ring: <Ring />, earrings: <><Ear t="translate(130 0)" /><Ear t="translate(270 0)" /></>, bangles: <Ban />, necklace: <Neck />,
    coins: <><Coin x="150" y="170" /><Coin x="250" y="130" /></>,
    mix: <><Ring t="translate(-10 -10) scale(.6)" /><Ban t="translate(95 12) scale(.62)" /><Ear t="translate(310 30) scale(.62)" /></>,
    bridal: <><Neck t="translate(0 -20)" /><Neck t="translate(40 10) scale(.8)" /><Ear t="translate(40 60) scale(.5)" /><Ear t="translate(360 60) scale(.5)" /></>,
  }[type];
  return (<div className="art" role="img" aria-label={label || type}>
    <svg viewBox="0 0 400 300" aria-hidden="true"><defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={c[0]} /><stop offset=".5" stopColor={c[1]} /><stop offset="1" stopColor={c[2]} /></linearGradient></defs>{body}</svg></div>);
}
