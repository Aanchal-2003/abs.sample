import React from 'react';
import { motion } from 'motion/react';

const B = "#3b82f6";
const BD = "#1d4ed8";
const BL = "#93c5fd";
const FB = "rgba(59,130,246,0.08)";
const FM = "rgba(59,130,246,0.15)";
const FD = "rgba(29,78,216,0.18)";
const sw = "1.5";

/* ─── HELPERS ──────────────────────────────────────────────────────────────── */
const Bg = () => <rect width="500" height="320" fill="#f0f7ff" rx="8"/>;

/* simple person: cx,cy = center of head */
const Person = ({ cx, cy, hair = FD, shirt = FM, skirt = false }) => {
  const hx = cx, hy = cy;
  return (
    <>
      <circle cx={hx} cy={hy} r="22" fill="white" stroke={B} strokeWidth={sw}/>
      <path d={`M${hx-20} ${hy-10} Q${hx} ${hy-24} ${hx+20} ${hy-10}`} fill={hair} stroke={B} strokeWidth="1"/>
      <path d={`M${hx-8} ${hy+5} Q${hx} ${hy+10} ${hx+8} ${hy+5}`} stroke={B} strokeWidth="1" fill="none"/>
      <line x1={hx} y1={hy+22} x2={hx} y2={hy+38} stroke={B} strokeWidth={sw}/>
      <path d={`M${hx-32} ${hy+38} Q${hx-35} ${hy+75} ${hx-33} ${hy+95} L${hx+33} ${hy+95} Q${hx+35} ${hy+75} ${hx+32} ${hy+38}`} fill={shirt} stroke={B} strokeWidth={sw}/>
      {skirt && <path d={`M${hx-33} ${hy+95} Q${hx-35} ${hy+118} ${hx-35} ${hy+128} L${hx+35} ${hy+128} Q${hx+35} ${hy+118} ${hx+33} ${hy+95}Z`} fill={FB} stroke={B} strokeWidth={sw}/>}
      {!skirt && <>
        <path d={`M${hx-15} ${hy+95} Q${hx-16} ${hy+122} ${hx-17} ${hy+136}`} stroke={B} strokeWidth={sw} fill="none"/>
        <path d={`M${hx+15} ${hy+95} Q${hx+16} ${hy+122} ${hx+17} ${hy+136}`} stroke={B} strokeWidth={sw} fill="none"/>
      </>}
    </>
  );
};

const Monitor = ({ x, y, w = 160, h = 100 }) => (
  <>
    <rect x={x} y={y} width={w} height={h} rx="5" fill="white" stroke={B} strokeWidth={sw}/>
    <rect x={x+8} y={y+8} width={w-16} height={h-16} rx="3" fill={FB}/>
    <line x1={x+w/2} y1={y+h} x2={x+w/2} y2={y+h+16} stroke={B} strokeWidth="2.5"/>
    <rect x={x+w/2-22} y={y+h+15} width="44" height="5" rx="2" fill={FM} stroke={B} strokeWidth="1"/>
  </>
);

const Phone = ({ x, y, w = 50, h = 88 }) => (
  <>
    <rect x={x} y={y} width={w} height={h} rx="10" fill="white" stroke={B} strokeWidth={sw}/>
    <rect x={x+6} y={y+12} width={w-12} height={h-26} rx="3" fill={FB}/>
    <rect x={x+w/2-14} y={y+4} width="28" height="9" rx="5" fill={FM} stroke={B} strokeWidth="1"/>
    <rect x={x+w/2-10} y={y+h-10} width="20" height="4" rx="2" fill={FM}/>
  </>
);

const Cloud = ({ cx, cy, rw = 70, rh = 35 }) => (
  <path d={`M${cx-rw} ${cy+rh*0.3} Q${cx-rw} ${cy-rh*1.1} ${cx-rw*0.4} ${cy-rh*1.1} Q${cx-rw*0.2} ${cy-rh*1.6} ${cx} ${cy-rh*1.4} Q${cx+rw*0.3} ${cy-rh*1.8} ${cx+rw*0.6} ${cy-rh*1.2} Q${cx+rw*1.1} ${cy-rh*1.1} ${cx+rw} ${cy} Q${cx+rw} ${cy+rh*0.8} ${cx+rw*0.3} ${cy+rh} L${cx-rw*0.3} ${cy+rh} Q${cx-rw} ${cy+rh*0.8} ${cx-rw} ${cy+rh*0.3}Z`} fill="white" stroke={B} strokeWidth="2"/>
);

const ServerRack = ({ x, y, rows = 5 }) => (
  <>
    <rect x={x} y={y} width="80" height={rows*22+14} rx="4" fill="white" stroke={B} strokeWidth={sw}/>
    {Array.from({length: rows}).map((_,i) => (
      <g key={i}>
        <rect x={x+5} y={y+7+i*22} width="70" height="14" rx="2" fill={FB} stroke={B} strokeWidth="0.8"/>
        <circle cx={x+68} cy={y+14+i*22} r="3" fill={i%4===3?"#eab308":"#22c55e"}/>
      </g>
    ))}
  </>
);

/* ─── 1. SERVICE PAGES (6 unique) ─────────────────────────────────────────── */

const Handshake = () => (
  <>
    <Bg/>
    <rect x="178" y="190" width="144" height="12" rx="4" fill={FM} stroke={B} strokeWidth={sw}/>
    <line x1="198" y1="202" x2="196" y2="245" stroke={B} strokeWidth={sw}/>
    <line x1="304" y1="202" x2="306" y2="245" stroke={B} strokeWidth={sw}/>
    <rect x="210" y="152" width="80" height="95" rx="3" fill="white" stroke={B} strokeWidth="1"/>
    <line x1="222" y1="170" x2="278" y2="170" stroke={B} strokeWidth="0.8"/>
    <line x1="222" y1="180" x2="278" y2="180" stroke={B} strokeWidth="0.8"/>
    <line x1="222" y1="190" x2="265" y2="190" stroke={B} strokeWidth="0.8"/>
    <path d="M222 230 Q234 225 246 230" stroke={B} strokeWidth="1" fill="none"/>
    <path d="M258 230 Q270 225 278 230" stroke={B} strokeWidth="1" fill="none"/>
    <circle cx="130" cy="100" r="24" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M108 88 Q130 76 152 88" fill={FD} stroke={B} strokeWidth="1.2"/>
    <path d="M120 106 Q130 112 140 106" stroke={B} strokeWidth="1" fill="none"/>
    <line x1="130" y1="124" x2="130" y2="140" stroke={B} strokeWidth={sw}/>
    <path d="M95 140 Q90 180 92 228 L168 228 Q170 180 165 140" fill={FB} stroke={B} strokeWidth={sw}/>
    <path d="M120 140 Q110 158 95 155" stroke={B} strokeWidth="1" fill="none"/>
    <path d="M140 140 Q150 158 165 155" stroke={B} strokeWidth="1" fill="none"/>
    <path d="M125 150 L130 170 L135 150" fill={FM} stroke={B} strokeWidth="1"/>
    <path d="M165 155 Q196 162 220 180" stroke={B} strokeWidth="2" fill="none"/>
    <path d="M95 155 Q76 165 70 198" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M108 228 Q105 258 103 272" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M152 228 Q155 258 157 272" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M220 178 Q228 172 236 178 Q240 185 234 193 Q228 198 220 193 Q215 186 220 178Z" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M236 178 Q244 172 252 178 Q256 185 250 193 Q244 198 236 193" stroke={B} strokeWidth={sw} fill={FB}/>
    <circle cx="368" cy="100" r="24" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M344 88 Q368 74 392 88 Q396 120 391 140" fill={FD} stroke={B} strokeWidth="1.2"/>
    <path d="M344 88 Q340 120 345 140" fill={FD} stroke={B} strokeWidth="1.2"/>
    <path d="M358 106 Q368 112 378 106" stroke={B} strokeWidth="1" fill="none"/>
    <line x1="368" y1="124" x2="368" y2="140" stroke={B} strokeWidth={sw}/>
    <path d="M333 140 Q328 180 330 228 L406 228 Q408 180 403 140" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M358 140 Q348 158 333 153" stroke={B} strokeWidth="1" fill="none"/>
    <path d="M378 140 Q388 158 403 153" stroke={B} strokeWidth="1" fill="none"/>
    <path d="M333 153 Q302 162 280 178" stroke={B} strokeWidth="2" fill="none"/>
    <path d="M403 153 Q422 165 427 198" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M342 228 Q338 255 338 270 L398 270 Q398 255 394 228Z" fill={FB} stroke={B} strokeWidth={sw}/>
    <line x1="352" y1="270" x2="349" y2="296" stroke={B} strokeWidth={sw}/>
    <line x1="388" y1="270" x2="391" y2="296" stroke={B} strokeWidth={sw}/>
    <rect x="400" y="32" width="75" height="100" rx="5" fill="white" stroke={B} strokeWidth={sw}/>
    <rect x="424" y="24" width="27" height="18" rx="4" fill={FM} stroke={B} strokeWidth={sw}/>
    <rect x="412" y="66" width="10" height="10" rx="2" fill={FM} stroke={B} strokeWidth="1"/>
    <path d="M413 71 L416 75 L421 65" stroke={B} strokeWidth="1.5" fill="none"/>
    <line x1="428" y1="71" x2="462" y2="71" stroke={B} strokeWidth="1"/>
    <rect x="412" y="82" width="10" height="10" rx="2" fill={FM} stroke={B} strokeWidth="1"/>
    <path d="M413 87 L416 91 L421 81" stroke={B} strokeWidth="1.5" fill="none"/>
    <line x1="428" y1="87" x2="462" y2="87" stroke={B} strokeWidth="1"/>
    <rect x="412" y="98" width="10" height="10" rx="2" stroke={B} strokeWidth="1"/>
    <line x1="428" y1="103" x2="462" y2="103" stroke={B} strokeWidth="1"/>
    <rect x="412" y="114" width="10" height="10" rx="2" stroke={B} strokeWidth="1"/>
    <line x1="428" y1="119" x2="455" y2="119" stroke={B} strokeWidth="1"/>
  </>
);

const ApiBridge = () => (
  <>
    <Bg/>
    <rect x="38" y="108" width="142" height="95" rx="6" fill="white" stroke={B} strokeWidth={sw}/>
    <rect x="46" y="116" width="126" height="79" rx="3" fill={FB}/>
    <line x1="56" y1="128" x2="110" y2="128" stroke={B} strokeWidth="1"/>
    <line x1="56" y1="138" x2="130" y2="138" stroke="#818cf8" strokeWidth="1"/>
    <line x1="60" y1="148" x2="120" y2="148" stroke="#34d399" strokeWidth="1"/>
    <line x1="60" y1="158" x2="138" y2="158" stroke={B} strokeWidth="0.8"/>
    <line x1="56" y1="168" x2="103" y2="168" stroke="#fbbf24" strokeWidth="1"/>
    <path d="M28 203 L48 212 L172 212 L192 203" fill={FM} stroke={B} strokeWidth={sw}/>
    <rect x="320" y="108" width="142" height="95" rx="6" fill="white" stroke={B} strokeWidth={sw}/>
    <rect x="328" y="116" width="126" height="79" rx="3" fill={FB}/>
    <rect x="336" y="124" width="110" height="14" rx="2" fill={FM} stroke={B} strokeWidth="0.8"/>
    <line x1="336" y1="145" x2="446" y2="145" stroke={B} strokeWidth="0.5"/>
    <line x1="336" y1="155" x2="446" y2="155" stroke={B} strokeWidth="0.5"/>
    <line x1="336" y1="165" x2="446" y2="165" stroke={B} strokeWidth="0.5"/>
    <rect x="340" y="170" width="10" height="15" fill={FM} stroke={B} strokeWidth="0.8"/>
    <rect x="356" y="160" width="10" height="25" fill={FD} stroke={B} strokeWidth="0.8" opacity="0.85"/>
    <rect x="372" y="154" width="10" height="31" fill={FM} stroke={B} strokeWidth="0.8"/>
    <path d="M310 203 L330 212 L452 212 L472 203" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M195 146 Q248 132 305 146" stroke={B} strokeWidth="2" fill="none"/>
    <polygon points="303,141 313,146 303,151" fill={B}/>
    <path d="M305 172 Q248 186 195 172" stroke={B} strokeWidth="2" fill="none"/>
    <polygon points="197,167 187,172 197,177" fill={B}/>
    <rect x="228" y="131" width="10" height="8" rx="2" fill={B} opacity="0.7"/>
    <rect x="250" y="126" width="10" height="8" rx="2" fill={B} opacity="0.5"/>
    <rect x="272" y="129" width="10" height="8" rx="2" fill={B} opacity="0.6"/>
    <circle cx="250" cy="159" r="24" fill="white" stroke={B} strokeWidth="2"/>
    <text x="250" y="155" textAnchor="middle" fill={B} fontSize="9" fontWeight="bold" fontFamily="monospace">API</text>
    <text x="250" y="167" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">SYNC</text>
    <Cloud cx="250" cy="50" rw={55} rh={28}/>
    <line x1="250" y1="68" x2="250" y2="86" stroke={B} strokeWidth="1" strokeDasharray="4,3"/>
    <text x="109" y="255" textAnchor="middle" fill={B} fontSize="9" fontWeight="600" fontFamily="sans-serif">TallyPrime</text>
    <text x="391" y="255" textAnchor="middle" fill={B} fontSize="9" fontWeight="600" fontFamily="sans-serif">Your Platform</text>
  </>
);

const Developer = () => (
  <>
    <Bg/>
    <rect x="78" y="220" width="314" height="14" rx="4" fill={FM} stroke={B} strokeWidth={sw}/>
    <line x1="118" y1="234" x2="116" y2="280" stroke={B} strokeWidth={sw}/>
    <line x1="362" y1="234" x2="364" y2="280" stroke={B} strokeWidth={sw}/>
    <Monitor x={128} y={88} w={202} h={132}/>
    <rect x="136" y="96" width="186" height="116" rx="3" fill="#0f172a"/>
    <line x1="148" y1="110" x2="196" y2="110" stroke="#60a5fa" strokeWidth="1.5"/>
    <line x1="148" y1="120" x2="232" y2="120" stroke="#818cf8" strokeWidth="1"/>
    <line x1="154" y1="130" x2="212" y2="130" stroke="#34d399" strokeWidth="1.2"/>
    <line x1="154" y1="140" x2="242" y2="140" stroke="#60a5fa" strokeWidth="1"/>
    <line x1="148" y1="150" x2="202" y2="150" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="154" y1="160" x2="222" y2="160" stroke="#34d399" strokeWidth="1.2"/>
    <line x1="154" y1="170" x2="197" y2="170" stroke="#818cf8" strokeWidth="1"/>
    <line x1="148" y1="180" x2="236" y2="180" stroke="#60a5fa" strokeWidth="1"/>
    <line x1="148" y1="190" x2="174" y2="190" stroke="#fbbf24" strokeWidth="1"/>
    <rect x="176" y="188" width="5" height="10" fill="#60a5fa" opacity="0.9"/>
    <rect x="153" y="220" width="148" height="20" rx="4" fill={FB} stroke={B} strokeWidth="1"/>
    {[0,1,2,3,4,5,6,7,8].map(i => <rect key={i} x={161+i*12} y={224} width="8" height="7" rx="1" stroke={B} strokeWidth="0.5" fill="white"/>)}
    <circle cx="388" cy="126" r="26" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M364 114 Q388 100 412 114" fill={FD} stroke={B} strokeWidth="1"/>
    <path d="M378 132 Q388 138 398 132" stroke={B} strokeWidth="1" fill="none"/>
    <circle cx="381" cy="124" r="2.5" fill={B}/><circle cx="395" cy="124" r="2.5" fill={B}/>
    <line x1="388" y1="152" x2="388" y2="168" stroke={B} strokeWidth={sw}/>
    <path d="M352 168 Q347 205 349 228 L427 228 Q429 205 424 168" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M352 178 Q328 190 318 212" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M424 178 Q440 190 444 212" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M362 228 Q358 260 356 278" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M414 228 Q418 260 420 278" stroke={B} strokeWidth={sw} fill="none"/>
    <circle cx="448" cy="70" r="22" fill="white" stroke={B} strokeWidth={sw}/>
    <circle cx="448" cy="70" r="14" fill={FB} stroke={B} strokeWidth="1"/>
    <circle cx="448" cy="70" r="6" fill={FM} stroke={B} strokeWidth="1"/>
    <rect x="445" y="46" width="6" height="9" rx="2" fill="white" stroke={B} strokeWidth="1"/>
    <rect x="445" y="85" width="6" height="9" rx="2" fill="white" stroke={B} strokeWidth="1"/>
    <rect x="422" y="67" width="9" height="6" rx="2" fill="white" stroke={B} strokeWidth="1"/>
    <rect x="465" y="67" width="9" height="6" rx="2" fill="white" stroke={B} strokeWidth="1"/>
    <rect x="38" y="58" width="64" height="28" rx="6" fill={FD} stroke={B} strokeWidth={sw}/>
    <text x="70" y="77" textAnchor="middle" fill={B} fontSize="11" fontWeight="bold" fontFamily="monospace">TDL</text>
  </>
);

const SupportDesk = () => (
  <>
    <Bg/>
    <rect x="58" y="210" width="284" height="12" rx="4" fill={FM} stroke={B} strokeWidth={sw}/>
    <line x1="88" y1="222" x2="86" y2="272" stroke={B} strokeWidth={sw}/>
    <line x1="312" y1="222" x2="314" y2="272" stroke={B} strokeWidth={sw}/>
    <Monitor x={98} y={118} w={172} h={92}/>
    <rect x="106" y="126" width="156" height="76" rx="3" fill={FB}/>
    <rect x="112" y="131" width="144" height="14" rx="2" fill={FD}/>
    <text x="184" y="142" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">TICKET #247 — OPEN</text>
    <rect x="117" y="150" width="62" height="9" rx="3" fill={FB} stroke={B} strokeWidth="0.5"/>
    <rect x="184" y="162" width="62" height="9" rx="3" fill={FM} stroke={B} strokeWidth="0.5"/>
    <rect x="288" y="170" width="22" height="38" rx="4" fill="white" stroke={B} strokeWidth="1"/>
    <rect x="291" y="176" width="16" height="24" rx="1" fill={FB}/>
    <circle cx="200" cy="93" r="27" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M175 81 Q200 67 225 81" fill={FD} stroke={B} strokeWidth="1"/>
    <path d="M190 98 Q200 105 210 98" stroke={B} strokeWidth="1" fill="none"/>
    <circle cx="192" cy="91" r="2.5" fill={B}/><circle cx="208" cy="91" r="2.5" fill={B}/>
    <path d="M225 86 Q240 79 242 93 Q242 107 230 109" stroke={B} strokeWidth={sw} fill="none"/>
    <circle cx="230" cy="111" r="5" fill={FM} stroke={B} strokeWidth="1.2"/>
    <path d="M175 81 Q168 67 175 56 Q200 45 225 56 Q232 67 225 81" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="169" y="77" width="12" height="18" rx="5" fill={FM} stroke={B} strokeWidth="1.2"/>
    <rect x="219" y="77" width="12" height="18" rx="5" fill={FM} stroke={B} strokeWidth="1.2"/>
    <line x1="200" y1="120" x2="200" y2="140" stroke={B} strokeWidth={sw}/>
    <path d="M163 140 Q158 180 160 222 L240 222 Q242 180 237 140" fill={FB} stroke={B} strokeWidth={sw}/>
    <path d="M163 152 Q138 162 123 188" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M237 152 Q262 162 272 188" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M171 222 Q166 254 164 270" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M229 222 Q234 254 236 270" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M338 68 Q338 50 358 50 L432 50 Q452 50 452 68 Q452 86 432 86 L370 86 L362 98 L360 86 Q338 86 338 68Z" fill="white" stroke={B} strokeWidth={sw}/>
    <line x1="354" y1="63" x2="436" y2="63" stroke={B} strokeWidth="1"/>
    <line x1="354" y1="73" x2="416" y2="73" stroke={B} strokeWidth="0.8"/>
    <path d="M388 132 Q388 122 398 122 L400 125 Q415 125 415 138 Q415 146 408 148 L385 170 Q380 175 375 170 Q370 165 375 160 L397 138 Q391 138 388 132Z" fill={FM} stroke={B} strokeWidth={sw}/>
    <rect x="338" y="192" width="104" height="34" rx="6" fill="white" stroke={B} strokeWidth="1"/>
    <text x="390" y="206" textAnchor="middle" fill={B} fontSize="8" fontWeight="600" fontFamily="sans-serif">Response Time</text>
    <text x="390" y="220" textAnchor="middle" fill={BD} fontSize="11" fontWeight="bold" fontFamily="sans-serif">&lt; 2 Hours</text>
  </>
);

const CloudServer = () => (
  <>
    <Bg/>
    <Cloud cx={248} cy={62} rw={80} rh={38}/>
    <rect x="226" y="42" width="22" height="18" rx="3" fill={FM} stroke={B} strokeWidth="1.2"/>
    <path d="M230 42 Q230 34 237 34 Q244 34 244 42" stroke={B} strokeWidth="1.2" fill="none"/>
    <circle cx="237" cy="51" r="3" fill={B}/>
    <line x1="214" y1="100" x2="154" y2="168" stroke={B} strokeWidth={sw} strokeDasharray="6,4"/>
    <line x1="248" y1="102" x2="248" y2="168" stroke={B} strokeWidth={sw} strokeDasharray="6,4"/>
    <line x1="280" y1="100" x2="340" y2="168" stroke={B} strokeWidth={sw} strokeDasharray="6,4"/>
    <polygon points="154,178 149,168 159,168" fill={B} opacity="0.7"/>
    <polygon points="248,178 243,168 253,168" fill={B} opacity="0.7"/>
    <polygon points="340,178 335,168 345,168" fill={B} opacity="0.7"/>
    <ServerRack x={114} y={168} rows={5}/>
    <ServerRack x={208} y={168} rows={5}/>
    <ServerRack x={300} y={168} rows={5}/>
    <rect x="390" y="65" width="92" height="42" rx="8" fill={FD} stroke={B} strokeWidth={sw}/>
    <text x="436" y="82" textAnchor="middle" fill={B} fontSize="14" fontWeight="bold" fontFamily="sans-serif">99.9%</text>
    <text x="436" y="98" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Uptime SLA</text>
    <rect x="394" y="125" width="84" height="28" rx="5" fill="white" stroke={BL} strokeWidth="1"/>
    <text x="436" y="143" textAnchor="middle" fill={B} fontSize="9" fontWeight="600" fontFamily="sans-serif">AWS / Azure</text>
  </>
);

const MobileCharts = () => (
  <>
    <Bg/>
    <Phone x={140} y={50} w={162} h={260}/>
    <rect x="149" y="68" width="144" height="226" rx="8" fill={FB}/>
    <rect x="149" y="68" width="144" height="30" rx="8" fill={FD}/>
    <text x="221" y="87" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Tally Dashboard</text>
    <rect x="153" y="102" width="62" height="38" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="184" y="115" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Revenue</text>
    <text x="184" y="130" textAnchor="middle" fill={BD} fontSize="10" fontWeight="bold" fontFamily="sans-serif">₹2.4M</text>
    <rect x="221" y="102" width="62" height="38" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="252" y="115" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Profit</text>
    <text x="252" y="130" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" fontFamily="sans-serif">↑18%</text>
    <rect x="153" y="146" width="130" height="66" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="218" y="159" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">Sales Trend</text>
    <polyline points="162,202 175,188 190,194 205,176 218,168 232,158 246,164 258,152 272,146" stroke={B} strokeWidth="2" fill="none"/>
    <line x1="160" y1="204" x2="280" y2="204" stroke={B} strokeWidth="0.8"/>
    <rect x="153" y="218" width="130" height="60" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="218" y="231" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">Monthly</text>
    <rect x="163" y="248" width="12" height="22" rx="2" fill={FM} stroke={B} strokeWidth="0.8"/>
    <rect x="179" y="240" width="12" height="30" rx="2" fill={B}/>
    <rect x="195" y="234" width="12" height="36" rx="2" fill={FD} opacity="0.9"/>
    <rect x="211" y="244" width="12" height="26" rx="2" fill={FM} stroke={B} strokeWidth="0.8"/>
    <rect x="227" y="236" width="12" height="34" rx="2" fill={B}/>
    <line x1="160" y1="272" x2="278" y2="272" stroke={B} strokeWidth="0.8"/>
    <circle cx="395" cy="115" r="27" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M370 103 Q395 89 420 103" fill={FD} stroke={B} strokeWidth="1"/>
    <path d="M385 120 Q395 127 405 120" stroke={B} strokeWidth="1.2" fill="none"/>
    <circle cx="388" cy="113" r="2.5" fill={B}/><circle cx="402" cy="113" r="2.5" fill={B}/>
    <line x1="395" y1="142" x2="395" y2="158" stroke={B} strokeWidth={sw}/>
    <path d="M360 158 Q354 198 356 252 L434 252 Q436 198 430 158" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M360 170 Q342 180 335 198 L335 232" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="316" y="232" width="36" height="58" rx="7" fill={FD} stroke={B} strokeWidth="1.2"/>
    <line x1="430" y1="170" x2="446" y2="205" stroke={B} strokeWidth={sw}/>
    <line x1="368" y1="252" x2="364" y2="280" stroke={B} strokeWidth={sw}/>
    <line x1="422" y1="252" x2="426" y2="280" stroke={B} strokeWidth={sw}/>
  </>
);

/* ─── 2. SUB-SERVICE PAGES ─────────────────────────────────────────────────── */

const SoftwareSetup = () => (
  <>
    <Bg/>
    <Monitor x={98} y={78} w={244} h={164}/>
    <rect x="108" y="88" width="224" height="144" rx="4" fill={FB}/>
    <rect x="108" y="88" width="224" height="26" rx="3" fill="#0f172a"/>
    <circle cx="122" cy="101" r="4" fill="#ef4444"/><circle cx="136" cy="101" r="4" fill="#eab308"/><circle cx="150" cy="101" r="4" fill="#22c55e"/>
    <text x="220" y="106" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime 4.0</text>
    <rect x="108" y="117" width="46" height="102" rx="0" fill={FB} stroke={B} strokeWidth="0.5"/>
    <rect x="110" y="123" width="42" height="12" rx="2" fill={FD}/>
    <text x="131" y="132" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif">Gateway</text>
    {["Accounting","Inventory","GST","Payroll","Banking"].map((t,i)=><text key={i} x="131" y={148+i*12} textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">{t}</text>)}
    <rect x="157" y="117" width="168" height="102" rx="0" fill="white"/>
    <text x="241" y="135" textAnchor="middle" fill={B} fontSize="9" fontWeight="600" fontFamily="sans-serif">Dashboard</text>
    {[0,1,2,3,4,5].map(i=><rect key={i} x={168+i*22} y={178-i*6} width="14" height={20+i*6} rx="2" fill={i%2===0?FM:B} stroke={B} strokeWidth="0.8"/>)}
    <line x1="165" y1="200" x2="298" y2="200" stroke={B} strokeWidth="0.8"/>
    <circle cx="388" cy="120" r="24" fill="white" stroke={B} strokeWidth={sw}/>
    <circle cx="381" cy="114" r="9" fill={FM} stroke={B} strokeWidth="1"/>
    <circle cx="398" cy="114" r="9" fill={FM} stroke={B} strokeWidth="1"/>
    <rect x="355" y="162" width="124" height="50" rx="8" fill="white" stroke={B} strokeWidth={sw}/>
    <text x="417" y="180" textAnchor="middle" fill={B} fontSize="8" fontWeight="600" fontFamily="sans-serif">Installing...</text>
    <rect x="366" y="188" width="102" height="10" rx="5" fill={FB} stroke={B} strokeWidth="1"/>
    <rect x="366" y="188" width="76" height="10" rx="5" fill={B}/>
    <circle cx="417" cy="260" r="28" fill="white" stroke={B} strokeWidth={sw}/>
    <circle cx="417" cy="260" r="20" fill={FM}/>
    <path d="M405 260 L413 268 L429 248" stroke={B} strokeWidth="2.5" fill="none"/>
  </>
);

const RemoteConnect = () => (
  <>
    <Bg/>
    <ServerRack x={210} y={110} rows={6}/>
    <text x="250" y="258" textAnchor="middle" fill={B} fontSize="9" fontWeight="600" fontFamily="sans-serif">Tally Server</text>
    <circle cx="250" cy="66" r="30" fill="white" stroke={B} strokeWidth={sw}/>
    <ellipse cx="250" cy="66" rx="12" ry="30" fill="none" stroke={B} strokeWidth="1"/>
    <line x1="222" y1="58" x2="278" y2="58" stroke={B} strokeWidth="1"/>
    <line x1="220" y1="66" x2="280" y2="66" stroke={B} strokeWidth="1"/>
    <line x1="222" y1="74" x2="278" y2="74" stroke={B} strokeWidth="1"/>
    <line x1="250" y1="96" x2="250" y2="110" stroke={B} strokeWidth={sw} strokeDasharray="5,3"/>
    {[{x:36,y:52,lx:142,ly:87,rx:210,ry:135,label:"Delhi"},{x:36,y:200,lx:116,ly:232,rx:210,ry:200,label:"Mumbai"},{x:370,y:52,lx:370,ly:87,rx:290,ry:135,label:"Kolkata"},{x:382,y:200,lx:382,ly:232,rx:290,ry:200,label:"Pune"}].map(({x,y,lx,ly,rx,ry,label},i)=>(
      <g key={i}>
        <rect x={x} y={y} width="92" height="64" rx="5" fill="white" stroke={B} strokeWidth="1.2"/>
        <rect x={x+7} y={y+8} width="78" height="48" rx="2" fill={FB}/>
        <line x1={x+14} y1={y+20} x2={x+58} y2={y+20} stroke={B} strokeWidth="0.8"/>
        <line x1={x+14} y1={y+30} x2={x+68} y2={y+30} stroke={B} strokeWidth="0.8"/>
        <line x1={lx} y1={ly} x2={rx} y2={ry} stroke={B} strokeWidth={sw} strokeDasharray="6,3" fill="none"/>
        <text x={x+46} y={y+86} textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">{label}</text>
      </g>
    ))}
  </>
);

const SystemUpgrade = () => (
  <>
    <Bg/>
    <rect x="38" y="130" width="148" height="130" rx="6" fill="white" stroke={BL} strokeWidth={sw}/>
    <rect x="46" y="140" width="132" height="86" rx="3" fill="#f1f5f9"/>
    <rect x="46" y="140" width="132" height="20" rx="0" fill="#64748b"/>
    <text x="112" y="154" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Tally ERP 9</text>
    <text x="130" y="200" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Legacy Interface</text>
    <rect x="38" y="263" width="148" height="22" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
    <text x="112" y="278" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="600" fontFamily="sans-serif">⚠ Legacy Version</text>
    <path d="M196 184 Q213 174 223 162 L223 206 Q213 206 196 200Z" fill={B} opacity="0.9"/>
    <path d="M223 173 L276 173 L276 157 L306 184 L276 211 L276 195 L223 195Z" fill={B}/>
    <text x="260" y="191" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">UPGRADE</text>
    <text x="248" y="150" textAnchor="middle" fill="#fbbf24" fontSize="14" fontFamily="sans-serif">✦</text>
    <text x="240" y="224" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="sans-serif">✦</text>
    <rect x="312" y="98" width="162" height="162" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="322" y="110" width="142" height="112" rx="4" fill={FB}/>
    <rect x="322" y="110" width="142" height="26" rx="4" fill={FD}/>
    <circle cx="334" cy="123" r="4" fill="#ef4444"/><circle cx="348" cy="123" r="4" fill="#eab308"/><circle cx="362" cy="123" r="4" fill="#22c55e"/>
    <text x="404" y="128" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime 4.0</text>
    <polyline points="362,207 378,192 394,200 410,184 426,174 442,180 456,167" stroke={B} strokeWidth="1.5" fill="none"/>
    <rect x="312" y="263" width="162" height="26" rx="6" fill={FD} stroke={B} strokeWidth={sw}/>
    <text x="393" y="280" textAnchor="middle" fill={B} fontSize="9" fontWeight="bold" fontFamily="sans-serif">✓ Upgraded!</text>
  </>
);

const ServerMulti = () => (
  <>
    <Bg/>
    <rect x="184" y="50" width="132" height="214" rx="6" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="192" y="60" width="116" height="22" rx="3" fill={FD}/>
    <text x="250" y="75" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TallyPrime Server</text>
    {Array.from({length:8}).map((_,i)=>(
      <g key={i}>
        <rect x="192" y={88+i*22} width="116" height="16" rx="2" fill={FB} stroke={B} strokeWidth="0.8"/>
        <circle cx="298" cy={96+i*22} r="3" fill={i===4?"#eab308":"#22c55e"}/>
      </g>
    ))}
    <rect x="198" y="268" width="104" height="26" rx="6" fill={FD} stroke={B} strokeWidth={sw}/>
    <text x="250" y="284" textAnchor="middle" fill={B} fontSize="10" fontWeight="bold" fontFamily="sans-serif">100+ Users</text>
    {[{x:26,y:50,lx2:184,ly2:130},{x:26,y:200,lx2:184,ly2:195},{x:348,y:50,lx2:316,ly2:130},{x:348,y:200,lx2:316,ly2:195}].map(({x,y,lx2,ly2},i)=>(
      <g key={i}>
        <rect x={x} y={y} width="92" height="62" rx="5" fill="white" stroke={B} strokeWidth="1.2"/>
        <rect x={x+7} y={y+8} width="78" height="46" rx="2" fill={FB}/>
        <line x1={x+14} y1={y+20} x2={x+60} y2={y+20} stroke={B} strokeWidth="0.8"/>
        <line x1={x+14} y1={y+30} x2={x+70} y2={y+30} stroke={B} strokeWidth="0.8"/>
        <text x={x+46} y={y+80} textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">{`Branch ${i+1}`}</text>
        <line x1={x>200?x:x+92} y1={y+30} x2={lx2} y2={ly2} stroke={B} strokeWidth="1" strokeDasharray="4,3"/>
      </g>
    ))}
  </>
);

const AuditView = () => (
  <>
    <Bg/>
    <Person cx={160} cy={130} shirt={FB}/>
    <path d="M186 162 Q215 165 218 185" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="220" y="100" width="140" height="180" rx="5" fill="white" stroke={B} strokeWidth={sw}/>
    <rect x="228" y="112" width="124" height="16" rx="3" fill={FD}/>
    <text x="290" y="124" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Audit Report</text>
    {[0,1,2,3,4,5,6].map(i=>(
      <g key={i}>
        <rect x="228" y={135+i*20} width="124" height="14" rx="2" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.5"/>
        <circle cx="238" cy={142+i*20} r="4" fill={i<4?"#22c55e":"#ef4444"}/>
        <text x="278" y={145+i*20} fill={B} fontSize="6" fontFamily="sans-serif">{["Ledger Verified","Vouchers OK","GST Matched","TDS Matched","Closing OK","Opening OK","Trial Bal."][i]}</text>
      </g>
    ))}
    <circle cx="152" cy="158" r="26" fill="none" stroke={B} strokeWidth="2"/>
    <line x1="172" y1="178" x2="195" y2="198" stroke={B} strokeWidth="3"/>
    <line x1="193" y1="196" x2="205" y2="210" stroke={B} strokeWidth="4"/>
    <text x="60" y="285" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Read-Only Access</text>
    <text x="420" y="298" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">CA / Auditor View</text>
  </>
);

const SubscriptionRenewal = () => (
  <>
    <Bg/>
    <rect x="130" y="60" width="240" height="200" rx="10" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="130" y="60" width="240" height="42" rx="10" fill={FD}/>
    <text x="250" y="86" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Tally Software Services</text>
    {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m,i)=>(
      <g key={i}>
        <rect x={140+(i%6)*36} y={112+Math.floor(i/6)*50} width="30" height="38" rx="4" fill={i===11?"#22c55e":i===10?FM:FB} stroke={i===11?"#22c55e":B} strokeWidth={i===11?"2":"0.8"}/>
        <text x={155+(i%6)*36} y={126+Math.floor(i/6)*50} textAnchor="middle" fill={i===11?"white":B} fontSize="7" fontFamily="sans-serif">{m}</text>
        {i===11&&<path d={`M${148+(i%6)*36} ${135+Math.floor(i/6)*50} L${152+(i%6)*36} ${140+Math.floor(i/6)*50} L${162+(i%6)*36} ${126+Math.floor(i/6)*50}`} stroke="white" strokeWidth="2" fill="none"/>}
      </g>
    ))}
    <circle cx="400" cy="140" r="50" fill={FM} stroke={B} strokeWidth="2"/>
    <text x="400" y="132" textAnchor="middle" fill={BD} fontSize="10" fontWeight="bold" fontFamily="sans-serif">TSS</text>
    <text x="400" y="146" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">RENEWED</text>
    <path d="M380 160 Q390 172 402 160" stroke={B} strokeWidth="2" fill="none"/>
    <polygon points="402,153 408,162 396,163" fill={B}/>
    <rect x="348" y="205" width="104" height="28" rx="6" fill={FD} stroke={B} strokeWidth={sw}/>
    <text x="400" y="223" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">✓ Active TSS</text>
    <text x="250" y="295" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Annual renewal — statutory updates auto-applied</text>
  </>
);

const ExcelImport = () => (
  <>
    <Bg/>
    <rect x="30" y="80" width="160" height="200" rx="6" fill="white" stroke="#22c55e" strokeWidth="2"/>
    <rect x="30" y="80" width="160" height="28" rx="6" fill="#16a34a"/>
    <text x="110" y="98" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Excel / CSV</text>
    {["Item","Qty","Rate","Amount"].map((h,i)=><text key={i} x={45+i*36} y="122" fill="white" fontSize="6" fontFamily="sans-serif" fontWeight="bold">{h}</text>)}
    <rect x="30" y="108" width="160" height="14" rx="0" fill="#166534" opacity="0.8"/>
    {[0,1,2,3,4,5,6,7].map(i=>(
      <g key={i}>
        <rect x="30" y={124+i*18} width="160" height="16" rx="0" fill={i%2===0?"#f0fdf4":"white"}/>
        <line x1="66" y1={124+i*18} x2="66" y2={140+i*18} stroke="#bbf7d0" strokeWidth="0.8"/>
        <line x1="102" y1={124+i*18} x2="102" y2={140+i*18} stroke="#bbf7d0" strokeWidth="0.8"/>
        <line x1="138" y1={124+i*18} x2="138" y2={140+i*18} stroke="#bbf7d0" strokeWidth="0.8"/>
        <rect x="32" y={126+i*18} width="30" height="10" rx="1" fill="#dcfce7"/>
        <rect x="68" y={126+i*18} width="30" height="10" rx="1" fill="#dcfce7"/>
        <rect x="104" y={126+i*18} width="30" height="10" rx="1" fill="#dcfce7"/>
        <rect x="140" y={126+i*18} width="42" height="10" rx="1" fill="#dcfce7"/>
      </g>
    ))}
    <path d="M200 170 L230 155 L230 165 L260 165 L260 175 L230 175 L230 185Z" fill={B}/>
    <text x="250" y="210" textAnchor="middle" fill={B} fontSize="9" fontWeight="bold" fontFamily="sans-serif">IMPORT</text>
    <rect x="300" y="80" width="170" height="200" rx="6" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="300" y="80" width="170" height="28" rx="6" fill={FD}/>
    <text x="385" y="98" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    <rect x="308" y="115" width="154" height="14" rx="3" fill={FM}/>
    <text x="385" y="126" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Sales Vouchers</text>
    {[0,1,2,3,4,5,6,7].map(i=>(
      <g key={i}>
        <rect x="308" y={135+i*18} width="154" height="14" rx="2" fill={FB} stroke={B} strokeWidth="0.5"/>
        <circle cx="318" cy={142+i*18} r="3" fill="#22c55e"/>
        <text x="360" y={145+i*18} fill={B} fontSize="6" fontFamily="sans-serif">Entry {i+1} — Imported</text>
      </g>
    ))}
    <circle cx="250" cy="290" r="16" fill="#22c55e" opacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
    <text x="250" y="295" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold" fontFamily="sans-serif">✓ Done</text>
  </>
);

const EcommerceStore = () => (
  <>
    <Bg/>
    <rect x="48" y="62" width="210" height="220" rx="10" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="48" y="62" width="210" height="36" rx="10" fill={FD}/>
    <text x="153" y="84" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Online Store</text>
    {[{n:"Product A",p:"₹1,200"},{n:"Product B",p:"₹850"},{n:"Product C",p:"₹2,100"}].map(({n,p},i)=>(
      <g key={i}>
        <rect x="60" y={108+i*62} width="82" height="50" rx="6" fill={FB} stroke={B} strokeWidth="1"/>
        <rect x="64" y={112+i*62} width="74" height="30" rx="4" fill={FM}/>
        <text x="101" y={130+i*62} textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">{n}</text>
        <text x="101" y={150+i*62} textAnchor="middle" fill={BD} fontSize="8" fontWeight="bold" fontFamily="sans-serif">{p}</text>
        <rect x="148" y={108+i*62} width="102" height="50" rx="6" fill={FB} stroke={B} strokeWidth="1"/>
        <text x="199" y={122+i*62} textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Order #{1001+i}</text>
        <text x="199" y={133+i*62} textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Qty: {i+1} units</text>
        <circle cx="204" cy={148+i*62} r="5" fill="#22c55e"/>
        <path d="M201,148 L203,151 L208,144" stroke="white" strokeWidth="1.5" fill="none" transform={`translate(0,${i*62})`}/>
      </g>
    ))}
    <path d="M266 170 L295 162 L295 172 L320 172 L320 178 L295 178 L295 188Z" fill={B}/>
    <text x="295" y="205" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Auto Sync</text>
    <rect x="328" y="80" width="144" height="180" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="328" y="80" width="144" height="26" rx="8" fill={FD}/>
    <text x="400" y="97" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    <text x="400" y="120" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Invoice Auto-Created</text>
    <rect x="336" y="128" width="128" height="120" rx="4" fill={FB}/>
    {[0,1,2,3].map(i=>(
      <g key={i}>
        <rect x="340" y={134+i*28} width="120" height="20" rx="3" fill="white" stroke={B} strokeWidth="0.5"/>
        <circle cx="350" cy={144+i*28} r="4" fill="#22c55e"/>
        <line x1="360" y1={141+i*28} x2="448" y2={141+i*28} stroke={B} strokeWidth="0.8"/>
        <line x1="360" y1={148+i*28} x2="432" y2={148+i*28} stroke={B} strokeWidth="0.5"/>
      </g>
    ))}
  </>
);

const WebCms = () => (
  <>
    <Bg/>
    <rect x="40" y="70" width="200" height="200" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="40" y="70" width="200" height="30" rx="8" fill="#7c3aed"/>
    <circle cx="58" cy="85" r="5" fill="#ef4444"/><circle cx="72" cy="85" r="5" fill="#eab308"/><circle cx="86" cy="85" r="5" fill="#22c55e"/>
    <text x="160" y="90" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Magento Store</text>
    <rect x="48" y="108" width="38" height="152" rx="3" fill="#f5f3ff"/>
    <text x="67" y="122" textAnchor="middle" fill="#7c3aed" fontSize="5" fontFamily="sans-serif">Menu</text>
    {["Catalog","Orders","Custom","Reports","Config"].map((t,i)=><text key={i} x="67" y={134+i*16} textAnchor="middle" fill="#6d28d9" fontSize="5" fontFamily="sans-serif">{t}</text>)}
    <rect x="90" y="108" width="142" height="152" rx="3" fill="white"/>
    <rect x="94" y="113" width="134" height="20" rx="3" fill="#ede9fe"/>
    <text x="161" y="127" textAnchor="middle" fill="#7c3aed" fontSize="7" fontFamily="sans-serif">Product Catalog (1,240 items)</text>
    <rect x="94" y="138" width="40" height="40" rx="4" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1"/>
    <rect x="138" y="138" width="40" height="40" rx="4" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1"/>
    <rect x="182" y="138" width="40" height="40" rx="4" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1"/>
    <path d="M248 165 L278 155 L278 165 L308 165 L308 171 L278 171 L278 181Z" fill={B}/>
    <text x="280" y="200" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Tally Sync</text>
    <rect x="316" y="100" width="154" height="170" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="316" y="100" width="154" height="26" rx="8" fill={FD}/>
    <text x="393" y="117" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    {["Inventory synced","Orders mapped","Pricing updated","GST invoices ready"].map((t,i)=>(
      <g key={i}>
        <rect x="324" y={134+i*32} width="138" height="24" rx="4" fill={FB} stroke={B} strokeWidth="0.8"/>
        <circle cx="334" cy={146+i*32} r="5" fill="#22c55e"/>
        <text x="393" y={149+i*32} textAnchor="middle" fill={B} fontSize="6.5" fontFamily="sans-serif">{t}</text>
      </g>
    ))}
  </>
);

const CodeBridge = () => (
  <>
    <Bg/>
    <rect x="30" y="88" width="130" height="160" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="30" y="88" width="130" height="26" rx="8" fill="#1e40af"/>
    <text x="95" y="105" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">PHP / Java</text>
    <rect x="38" y="122" width="114" height="118" rx="4" fill="#0f172a"/>
    {["function syncTally() {","  const data = fetch(","    '/api/tally'","  );","  return data.map(","    row => voucher(row)","  );","}"].map((l,i)=>(
      <text key={i} x="44" y={136+i*13} fill={["#60a5fa","#fbbf24","#34d399","#fbbf24","#60a5fa","#34d399","#fbbf24","#60a5fa"][i]} fontSize="6.5" fontFamily="monospace">{l}</text>
    ))}
    <rect x="200" y="110" width="100" height="130" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="200" y="110" width="100" height="26" rx="8" fill={FM}/>
    <text x="250" y="127" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Middleware</text>
    <rect x="208" y="144" width="84" height="16" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="250" y="156" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">XML → JSON</text>
    <rect x="208" y="166" width="84" height="16" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="250" y="178" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Auth Layer</text>
    <rect x="208" y="188" width="84" height="16" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="250" y="200" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Retry Logic</text>
    <rect x="208" y="210" width="84" height="16" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="250" y="222" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">ODBC Bridge</text>
    <rect x="340" y="88" width="130" height="160" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="340" y="88" width="130" height="26" rx="8" fill={FD}/>
    <text x="405" y="105" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    <rect x="348" y="122" width="114" height="118" rx="4" fill={FB}/>
    {[0,1,2,3,4].map(i=>(
      <g key={i}>
        <rect x="352" y={130+i*22} width="106" height="14" rx="2" fill="white" stroke={B} strokeWidth="0.5"/>
        <circle cx="360" cy={137+i*22} r="3" fill="#22c55e"/>
        <line x1="368" y1={134+i*22} x2="450" y2={134+i*22} stroke={B} strokeWidth="0.8"/>
      </g>
    ))}
    <line x1="160" y1="170" x2="200" y2="170" stroke={B} strokeWidth="2" strokeDasharray="5,3"/>
    <polygon points="198,165 208,170 198,175" fill={B}/>
    <line x1="300" y1="170" x2="340" y2="170" stroke={B} strokeWidth="2" strokeDasharray="5,3"/>
    <polygon points="338,165 348,170 338,175" fill={B}/>
  </>
);

const PaymentFlow = () => (
  <>
    <Bg/>
    <rect x="48" y="78" width="120" height="80" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="56" y="86" width="104" height="16" rx="3" fill={FM}/>
    <text x="108" y="98" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">**** **** **** 4242</text>
    <rect x="56" y="108" width="44" height="12" rx="2" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="78" y="118" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">VALID THRU</text>
    <text x="108" y="148" textAnchor="middle" fill={B} fontSize="9" fontWeight="bold" fontFamily="sans-serif">₹ 45,500</text>
    <text x="108" y="162" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="sans-serif">✓ Payment Received</text>
    <rect x="194" y="108" width="112" height="50" rx="6" fill={FB} stroke={B} strokeWidth="1.5"/>
    <text x="250" y="128" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Payment Gateway</text>
    <text x="250" y="142" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Razorpay / PayTM</text>
    <text x="250" y="152" textAnchor="middle" fill={BL} fontSize="6" fontFamily="sans-serif">UPI · NEFT · Card</text>
    <line x1="168" y1="118" x2="194" y2="128" stroke={B} strokeWidth="2"/>
    <polygon points="192,122 202,128 192,134" fill={B}/>
    <line x1="306" y1="128" x2="342" y2="155" stroke={B} strokeWidth="2"/>
    <polygon points="340,148 348,158 338,160" fill={B}/>
    <rect x="340" y="88" width="130" height="160" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="340" y="88" width="130" height="26" rx="8" fill={FD}/>
    <text x="405" y="105" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    <rect x="348" y="122" width="114" height="16" rx="3" fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>
    <text x="405" y="134" textAnchor="middle" fill="#16a34a" fontSize="7" fontFamily="sans-serif">✓ Receipt Created</text>
    <rect x="348" y="144" width="114" height="14" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="405" y="155" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Bank Reconciled</text>
    <rect x="348" y="164" width="114" height="14" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="405" y="175" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">GST Entry: Auto</text>
    <rect x="348" y="184" width="114" height="14" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="405" y="195" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">TDS Deducted</text>
    <rect x="348" y="204" width="114" height="14" rx="3" fill={FB} stroke={B} strokeWidth="0.8"/>
    <text x="405" y="215" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Ledger Updated</text>
    <rect x="60" y="190" width="220" height="80" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
    <text x="170" y="208" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Transaction Log</text>
    {["UPI - Raj Ent. ₹45,500 ✓","Card - ABS Corp ₹22,000 ✓","NEFT - XYZ Pvt ₹1,10,000 ✓"].map((t,i)=><text key={i} x="80" y={222+i*16} fill={B} fontSize="6.5" fontFamily="sans-serif">{t}</text>)}
  </>
);

const CrmContacts = () => (
  <>
    <Bg/>
    <rect x="30" y="58" width="440" height="230" rx="10" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="30" y="58" width="440" height="32" rx="10" fill={FD}/>
    <text x="250" y="79" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CRM Integration — Customer 360°</text>
    {[{n:"Raj Enterprises",s:"₹4.2L",c:"#22c55e"},{n:"ABS Corp",s:"₹1.8L",c:"#eab308"},{n:"Global Traders",s:"₹6.1L",c:"#22c55e"},{n:"City Wholesale",s:"₹0.5L",c:"#ef4444"},{n:"Metro Sales",s:"₹2.9L",c:"#22c55e"},{n:"North Exports",s:"₹3.3L",c:"#22c55e"}].map(({n,s,c},i)=>(
      <g key={i}>
        <rect x={40+(i%3)*148} y={100+Math.floor(i/3)*90} width="134" height="76" rx="6" fill={FB} stroke={B} strokeWidth="1"/>
        <circle cx={60+(i%3)*148} cy={118+Math.floor(i/3)*90} r="12" fill={FM} stroke={B} strokeWidth="1"/>
        <text x={60+(i%3)*148} y={123+Math.floor(i/3)*90} textAnchor="middle" fill={B} fontSize="10" fontFamily="sans-serif">{n[0]}</text>
        <text x={84+(i%3)*148} y={115+Math.floor(i/3)*90} fill={B} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">{n}</text>
        <text x={84+(i%3)*148} y={127+Math.floor(i/3)*90} fill={B} fontSize="6" fontFamily="sans-serif">Outstanding: {s}</text>
        <circle cx={84+(i%3)*148} cy={144+Math.floor(i/3)*90} r="4" fill={c}/>
        <text x={94+(i%3)*148} y={148+Math.floor(i/3)*90} fill={B} fontSize="6" fontFamily="sans-serif">{c==="#22c55e"?"Active":"Review"}</text>
        <line x1={146+(i%3)*148} y1={138+Math.floor(i/3)*90} x2={162+(i%3===2?2:1)*148} y2={138+Math.floor(i/3)*90} stroke={BL} strokeWidth="0.8" strokeDasharray="3,2"/>
      </g>
    ))}
    <rect x="148" y="285" width="204" height="22" rx="6" fill={FD}/>
    <text x="250" y="300" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Salesforce · HubSpot · Zoho CRM</text>
  </>
);

const ApiConnector = () => (
  <>
    <Bg/>
    <circle cx="250" cy="160" r="56" fill="white" stroke={B} strokeWidth="2"/>
    <circle cx="250" cy="160" r="42" fill={FB} stroke={B} strokeWidth="1"/>
    <text x="250" y="153" textAnchor="middle" fill={B} fontSize="14" fontWeight="bold" fontFamily="monospace">API</text>
    <text x="250" y="168" textAnchor="middle" fill={B} fontSize="9" fontFamily="sans-serif">REST / XML</text>
    <text x="250" y="181" textAnchor="middle" fill={BL} fontSize="8" fontFamily="sans-serif">TallyPrime</text>
    {[{angle:270,label:"Shopify"},{angle:315,label:"WooCommerce"},{angle:0,label:"Salesforce"},{angle:45,label:"PayGateway"},{angle:90,label:"ERP System"},{angle:135,label:"Banking"},{angle:180,label:"Excel/CSV"},{angle:225,label:"Mobile App"}].map(({angle,label},i)=>{
      const rad=(angle-90)*Math.PI/180;
      const ix=250+80*Math.cos(rad), iy=160+80*Math.sin(rad);
      const ox=250+118*Math.cos(rad), oy=160+118*Math.sin(rad);
      const lx=250+140*Math.cos(rad), ly=160+140*Math.sin(rad);
      return (
        <g key={i}>
          <line x1={ix} y1={iy} x2={ox-14} y2={oy-14*Math.sin(rad)/Math.abs(Math.cos(rad)||1)} stroke={B} strokeWidth={sw} strokeDasharray="5,3"/>
          <rect x={lx-36} y={ly-10} width="72" height="20" rx="5" fill="white" stroke={B} strokeWidth="1"/>
          <text x={lx} y={ly+5} textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">{label}</text>
        </g>
      );
    })}
  </>
);

const QuickbooksSync = () => (
  <>
    <Bg/>
    <rect x="32" y="90" width="158" height="198" rx="8" fill="white" stroke="#22c55e" strokeWidth="2"/>
    <rect x="40" y="100" width="142" height="28" rx="4" fill="#16a34a"/>
    <text x="111" y="118" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">QuickBooks</text>
    {["Chart of Accounts","Invoices","Customers","Payments","Expenses","Vendors","Payroll","Reports"].map((t,i)=>(
      <g key={i}><rect x="40" y={134+i*18} width="142" height="14" rx="3" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>
      <text x="111" y={144+i*18} textAnchor="middle" fill="#16a34a" fontSize="7" fontFamily="sans-serif">{t}</text></g>
    ))}
    <rect x="310" y="90" width="158" height="198" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="318" y="100" width="142" height="28" rx="4" fill={FD}/>
    <text x="389" y="118" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    {["Ledger Groups","Sales Vouchers","Parties","Receipts","Purchase Vouchers","Creditors","Payroll","P&L / Balance Sheet"].map((t,i)=>(
      <g key={i}><rect x="318" y={134+i*18} width="142" height="14" rx="3" fill={FB} stroke={BL} strokeWidth="1"/>
      <text x="389" y={144+i*18} textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">{t}</text></g>
    ))}
    <path d="M193 143 Q222 143 222 151 L222 159 Q222 167 211 167 L193 167" stroke="#22c55e" strokeWidth="1.8" fill="none"/>
    <polygon points="193,161 182,167 193,173" fill="#22c55e"/>
    <path d="M307 181 Q278 181 278 189 L278 197 Q278 205 293 205 L307 205" stroke={B} strokeWidth="1.8" fill="none"/>
    <polygon points="307,199 318,205 307,211" fill={B}/>
    <path d="M193 215 Q222 215 222 223 L222 231 Q222 239 211 239 L193 239" stroke="#22c55e" strokeWidth="1.8" fill="none"/>
    <polygon points="193,233 182,239 193,245" fill="#22c55e"/>
    <rect x="173" y="46" width="154" height="34" rx="8" fill="white" stroke={B} strokeWidth={sw}/>
    <circle cx="194" cy="63" r="9" fill="#22c55e"/>
    <path d="M189 63 L192 67 L200 58" stroke="white" strokeWidth="2" fill="none"/>
    <text x="255" y="60" textAnchor="middle" fill={B} fontSize="8" fontWeight="600" fontFamily="sans-serif">Sync Active</text>
    <text x="255" y="74" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Last sync: 2 min ago</text>
  </>
);

const InvoiceDesign = () => (
  <>
    <Bg/>
    <Person cx={155} cy={150} shirt={FB}/>
    <path d="M180 180 Q205 185 220 192" stroke={B} strokeWidth={sw} fill="none"/>
    <Monitor x={220} y={108} w={175} h={140}/>
    <rect x="228" y="116" width="159" height="124" rx="3" fill="white"/>
    <rect x="228" y="116" width="159" height="22" rx="3" fill={FD}/>
    <text x="307" y="131" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TAX INVOICE</text>
    <rect x="232" y="142" width="60" height="36" rx="1" fill={FB}/>
    <line x1="235" y1="149" x2="288" y2="149" stroke={B} strokeWidth="0.8"/>
    <line x1="235" y1="157" x2="284" y2="157" stroke={B} strokeWidth="0.8"/>
    <line x1="235" y1="165" x2="280" y2="165" stroke={B} strokeWidth="0.8"/>
    <rect x="232" y="182" width="152" height="8" rx="1" fill={FM}/>
    <line x1="232" y1="196" x2="384" y2="196" stroke={B} strokeWidth="0.5"/>
    <line x1="232" y1="208" x2="384" y2="208" stroke={B} strokeWidth="0.5"/>
    <line x1="232" y1="220" x2="384" y2="220" stroke={B} strokeWidth="0.5"/>
    <line x1="308" y1="182" x2="308" y2="228" stroke={B} strokeWidth="0.5"/>
    <line x1="345" y1="182" x2="345" y2="228" stroke={B} strokeWidth="0.5"/>
    <path d="M390 75 L416 104 L409 111 L383 82Z" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M416 104 L422 118 L409 111Z" fill={B} stroke={B} strokeWidth="1"/>
    <line x1="390" y1="75" x2="385" y2="65" stroke={B} strokeWidth={sw}/>
    <circle cx="386" cy="63" r="4" fill={FD} stroke={B} strokeWidth="1"/>
    <text x="155" y="295" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Invoice Designer</text>
  </>
);

const OnsiteSupport = () => (
  <>
    <Bg/>
    <rect x="278" y="218" width="198" height="12" rx="4" fill={FM} stroke={B} strokeWidth={sw}/>
    <Monitor x={312} y={124} w={148} h={96}/>
    <rect x="320" y="132" width="132" height="78" rx="3" fill="#fef2f2"/>
    <path d="M386 144 L392 166 L380 166Z" fill="#ef4444" opacity="0.8"/>
    <text x="386" y="178" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Error: Data Not Found</text>
    <circle cx="432" cy="103" r="23" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M411 92 Q432 80 453 92" fill={FD} stroke={B} strokeWidth="1"/>
    <path d="M423 108 Q432 104 441 108" stroke={B} strokeWidth="1" fill="none"/>
    <line x1="432" y1="126" x2="432" y2="140" stroke={B} strokeWidth={sw}/>
    <path d="M406 140 Q400 178 402 228 L462 228 Q464 178 458 140" fill={FB} stroke={B} strokeWidth={sw}/>
    <path d="M406 153 Q388 160 378 175" stroke={B} strokeWidth={sw} fill="none"/>
    <circle cx="152" cy="120" r="28" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M126 108 Q152 94 178 108" fill={FD} stroke={B} strokeWidth="1"/>
    <path d="M178 106 Q193 98 195 116 Q195 130 183 133" stroke={B} strokeWidth={sw} fill="none"/>
    <circle cx="183" cy="135" r="5" fill={FM} stroke={B} strokeWidth="1.2"/>
    <path d="M126 106 Q126 87 152 85 Q178 87 178 106" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="120" y="107" width="13" height="19" rx="5" fill={FM} stroke={B} strokeWidth="1.2"/>
    <rect x="219" y="107" width="13" height="19" rx="5" fill={FM} stroke={B} strokeWidth="1.2"/>
    <path d="M143 126 Q152 133 161 126" stroke={B} strokeWidth="1.2" fill="none"/>
    <line x1="152" y1="148" x2="152" y2="164" stroke={B} strokeWidth={sw}/>
    <path d="M114 164 Q108 204 110 258 L194 258 Q196 204 190 164" fill={FM} stroke={B} strokeWidth={sw}/>
    <rect x="137" y="178" width="30" height="42" rx="3" fill="white" stroke={B} strokeWidth="1"/>
    <circle cx="152" cy="188" r="7" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="152" y="215" textAnchor="middle" fill={B} fontSize="5" fontFamily="sans-serif">TECHNICIAN</text>
    <path d="M190 178 Q228 188 270 202" stroke={B} strokeWidth={sw} fill="none"/>
    <path d="M196 88 Q196 70 216 70 L284 70 Q304 70 304 88 Q304 106 284 106 L220 106 L212 118 L210 106 Q196 106 196 88Z" fill="white" stroke={B} strokeWidth={sw}/>
    <text x="252" y="92" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">I'll fix this for you!</text>
  </>
);

const CloudAccess = () => (
  <>
    <Bg/>
    <Cloud cx={248} cy={100} rw={90} rh={44}/>
    <rect x="200" y="72" width="82" height="36" rx="4" fill={FB}/>
    <text x="241" y="87" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    <text x="241" y="99" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">on Cloud</text>
    <Monitor x={38} y={185} w={132} h={90}/>
    <rect x="46" y="193" width="116" height="74" rx="3" fill={FB}/>
    <rect x="50" y="197" width="108" height="20" rx="2" fill={FD}/>
    <text x="104" y="211" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    <path d="M28 275 L48 283 L182 283 L202 275" fill={FM} stroke={B} strokeWidth="1"/>
    <Monitor x={278} y={170} w={178} h={115}/>
    <rect x="286" y="178" width="162" height="99" rx="3" fill={FB}/>
    <rect x="290" y="182" width="154" height="22" rx="2" fill={FD}/>
    <text x="367" y="197" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime Dashboard</text>
    {[0,1,2,3,4].map(i=><rect key={i} x={300+i*25} y={228-i*8} width="16" height={16+i*8} rx="2" fill={i%2===0?FM:B}/>)}
    <line x1="104" y1="185" x2="215" y2="144" stroke={B} strokeWidth="1.8" strokeDasharray="7,4"/>
    <line x1="348" y1="170" x2="300" y2="144" stroke={B} strokeWidth="1.8" strokeDasharray="7,4"/>
    <g transform="translate(152,162)"><rect x="-8" y="-7" width="16" height="14" rx="2" fill="white" stroke={B} strokeWidth="1.2"/><path d="M-5,-7 Q-5,-14 0,-14 Q5,-14 5,-7" stroke={B} strokeWidth="1.2" fill="none"/><circle cx="0" cy="-1" r="2.5" fill={B}/></g>
    <g transform="translate(310,155)"><rect x="-8" y="-7" width="16" height="14" rx="2" fill="white" stroke={B} strokeWidth="1.2"/><path d="M-5,-7 Q-5,-14 0,-14 Q5,-14 5,-7" stroke={B} strokeWidth="1.2" fill="none"/><circle cx="0" cy="-1" r="2.5" fill={B}/></g>
  </>
);

const BizDashboard = () => (
  <>
    <Bg/>
    <Phone x={162} y={28} w={172} h={278}/>
    <rect x="172" y="48" width="152" height="248" rx="10" fill={FB}/>
    <rect x="172" y="48" width="152" height="30" rx="10" fill={FD}/>
    <text x="248" y="68" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Business Dashboard</text>
    <rect x="176" y="82" width="66" height="40" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="209" y="96" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Revenue</text>
    <text x="209" y="111" textAnchor="middle" fill={BD} fontSize="11" fontWeight="bold" fontFamily="sans-serif">2.4M</text>
    <rect x="248" y="82" width="66" height="40" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="281" y="96" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Profit</text>
    <text x="281" y="111" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold" fontFamily="sans-serif">18%</text>
    <rect x="176" y="128" width="138" height="68" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="245" y="141" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">Sales Trend</text>
    <polyline points="184,188 198,174 214,180 228,162 242,154 256,144 270,150 284,138 298,132" stroke={B} strokeWidth="2" fill="none"/>
    <rect x="176" y="202" width="138" height="64" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="245" y="215" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">Monthly Sales</text>
    {[20,28,34,24,32,38,28].map((h,i)=><rect key={i} x={186+i*18} y={262-h} width="13" height={h} rx="2" fill={i%2===0?FM:B}/>)}
    <line x1="183" y1="263" x2="314" y2="263" stroke={B} strokeWidth="0.8"/>
    <rect x="176" y="272" width="138" height="18" rx="4" fill={FD}/>
    <text x="245" y="284" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif">Cash: ₹8.2L  |  Due: ₹3.1L</text>
    <circle cx="412" cy="112" r="27" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M387 100 Q412 86 437 100" fill={FD} stroke={B} strokeWidth="1"/>
    <path d="M402 118 Q412 125 422 118" stroke={B} strokeWidth="1.2" fill="none"/>
    <circle cx="405" cy="110" r="2.5" fill={B}/><circle cx="419" cy="110" r="2.5" fill={B}/>
    <line x1="412" y1="139" x2="412" y2="155" stroke={B} strokeWidth={sw}/>
    <path d="M376 155 Q370 196 372 248 L452 248 Q454 196 448 155" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M376 168 Q358 178 352 196 L352 230" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="334" y="230" width="36" height="60" rx="7" fill={FD} stroke={B} strokeWidth="1.2"/>
  </>
);

const CustomerProfile = () => (
  <>
    <Bg/>
    <Phone x={58} y={32} w={166} h={278}/>
    <rect x="67" y="52" width="148" height="242" rx="10" fill={FB}/>
    <rect x="67" y="52" width="148" height="28" rx="10" fill={FD}/>
    <text x="141" y="70" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Customer 360°</text>
    <circle cx="102" cy="112" r="23" fill="white" stroke={B} strokeWidth={sw}/>
    <circle cx="102" cy="106" r="10" fill={FM} stroke={B} strokeWidth="1"/>
    <path d="M80 130 Q84 120 102 118 Q120 120 124 130" stroke={B} strokeWidth="1" fill={FB}/>
    <text x="168" y="104" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Raj Enterprises</text>
    <text x="168" y="116" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Mumbai, India</text>
    <rect x="148" y="122" width="52" height="14" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>
    <text x="174" y="132" textAnchor="middle" fill="#16a34a" fontSize="6" fontWeight="bold" fontFamily="sans-serif">✓ Active Client</text>
    <rect x="74" y="146" width="46" height="38" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="97" y="159" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Orders</text>
    <text x="97" y="175" textAnchor="middle" fill={BD} fontSize="12" fontWeight="bold" fontFamily="sans-serif">142</text>
    <rect x="127" y="146" width="46" height="38" rx="5" fill="white" stroke={BL} strokeWidth="0.8"/>
    <text x="150" y="159" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Due</text>
    <text x="150" y="174" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold" fontFamily="sans-serif">₹24K</text>
    <rect x="74" y="190" width="136" height="12" rx="3" fill={FD}/>
    <text x="142" y="199" textAnchor="middle" fill="white" fontSize="6" fontWeight="600" fontFamily="sans-serif">Purchase History</text>
    {[["Jan 15","₹45,500","Paid"],["Feb 3","₹28,800","Paid"],["Mar 8","₹24,000","Due"]].map(([d,a,s],i)=>(
      <g key={i}><rect x="74" y={206+i*16} width="136" height="13" rx="2" fill="white" stroke={BL} strokeWidth="0.5"/>
      <text x="142" y={215+i*16} textAnchor="middle" fill={s==="Due"?"#ef4444":B} fontSize="6" fontFamily="sans-serif">{d} — {a} — {s}</text></g>
    ))}
    <circle cx="412" cy="164" r="26" fill="white" stroke={B} strokeWidth={sw}/>
    <path d="M388 152 Q412 138 436 152" fill={FD} stroke={B} strokeWidth="1"/>
    <line x1="412" y1="190" x2="412" y2="206" stroke={B} strokeWidth={sw}/>
    <path d="M376 206 Q370 248 372 296 L452 296 Q454 248 448 206" fill={FM} stroke={B} strokeWidth={sw}/>
    <path d="M376 218 Q358 228 352 248 L352 270" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="334" y="270" width="32" height="52" rx="6" fill={FD} stroke={B} strokeWidth="1.2"/>
    <rect x="352" y="46" width="122" height="82" rx="8" fill="white" stroke={B} strokeWidth={sw}/>
    <text x="413" y="66" textAnchor="middle" fill={B} fontSize="8" fontWeight="600" fontFamily="sans-serif">GPS Location</text>
    <rect x="362" y="73" width="102" height="47" rx="4" fill={FB}/>
    <line x1="362" y1="94" x2="464" y2="94" stroke={BL} strokeWidth="1.5"/>
    <line x1="413" y1="73" x2="413" y2="120" stroke={BL} strokeWidth="1.5"/>
    <path d="M412 76 Q418 76 418 82 Q418 93 412 99 Q406 93 406 82 Q406 76 412 76Z" fill={B}/>
    <circle cx="412" cy="82" r="3" fill="white"/>
  </>
);

/* ── simple-scene helpers ── */
const SimpleScene = ({ title, children, badge }) => (
  <>
    <Bg/>
    {children}
    {badge && <><rect x="160" y="282" width="180" height="22" rx="6" fill={FD}/><text x="250" y="297" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">{badge}</text></>}
  </>
);

const BarCodeScan = () => (
  <SimpleScene badge="Barcode & Label Printing">
    <rect x="160" y="60" width="120" height="70" rx="4" fill="white" stroke={B} strokeWidth="2"/>
    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i=><line key={i} x1={168+i*6} y1="68" x2={168+i*6} y2="122" stroke={B} strokeWidth={i%3===0?2:0.8}/>)}
    <text x="220" y="142" textAnchor="middle" fill={B} fontSize="8" fontFamily="monospace">8901234567890</text>
    <rect x="90" y="100" width="60" height="42" rx="8" fill={FM} stroke={B} strokeWidth="2"/>
    <line x1="146" y1="116" x2="162" y2="112" stroke={B} strokeWidth="2.5"/>
    <circle cx="108" cy="108" r="5" fill="white" stroke={B} strokeWidth="1.5"/>
    <rect x="96" y="120" width="48" height="6" rx="2" fill={B} opacity="0.6"/>
    <Person cx={78} cy={190} shirt={FM}/>
    <path d="M104 165 Q120 148 146 138" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="296" y="80" width="110" height="145" rx="6" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="304" y="90" width="94" height="18" rx="3" fill={FD}/>
    <text x="351" y="103" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">Label Queue</text>
    {["Label-001","Label-002","Label-003","Label-004","Label-005","Label-006"].map((t,i)=>(
      <g key={i}><rect x="304" y={114+i*18} width="94" height="14" rx="2" fill={FB} stroke={B} strokeWidth="0.5"/><text x="351" y={124+i*18} textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">{t} ✓</text></g>
    ))}
  </SimpleScene>
);

const SupplyChain = () => (
  <SimpleScene badge="Supply Chain Visibility">
    {[{icon:"🏭",label:"Supplier",x:30},{icon:"🚛",label:"Transit",x:148},{icon:"🏪",label:"Warehouse",x:266},{icon:"🏬",label:"Delivery",x:384}].map(({icon,label,x},i)=>(
      <g key={i}>
        <circle cx={x+38} cy={140} r="36" fill="white" stroke={B} strokeWidth="2"/>
        <text x={x+38} y={135} textAnchor="middle" fontSize="22" fontFamily="sans-serif">{icon}</text>
        <text x={x+38} y={152} textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">{label}</text>
        <text x={x+38} y={194} textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">{["PO Raised","In Transit","GRN Done","Delivered"][i]}</text>
        {i<3&&<><line x1={x+74} y1={140} x2={x+110} y2={140} stroke={B} strokeWidth="1.5" strokeDasharray="4,3"/><polygon points={`${x+108},135 ${x+118},140 ${x+108},145`} fill={B}/></>}
      </g>
    ))}
    <rect x="60" y="220" width="380" height="32" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
    <text x="250" y="234" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">Real-time tracking inside TallyPrime</text>
    <text x="250" y="246" textAnchor="middle" fill={BL} fontSize="6" fontFamily="sans-serif">Purchase → GRN → Stock → Sales → Dispatch</text>
  </SimpleScene>
);

const ItemCatalog = () => (
  <SimpleScene badge="Item Name Creator">
    <rect x="40" y="58" width="420" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="40" y="58" width="420" height="28" rx="8" fill={FD}/>
    <text x="250" y="77" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Auto Item Naming Engine</text>
    <rect x="52" y="95" width="80" height="24" rx="4" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="92" y="111" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Category</text>
    <rect x="140" y="95" width="70" height="24" rx="4" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="175" y="111" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Brand</text>
    <rect x="218" y="95" width="60" height="24" rx="4" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="248" y="111" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Size</text>
    <rect x="286" y="95" width="70" height="24" rx="4" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="321" y="111" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Variant</text>
    <rect x="364" y="95" width="84" height="24" rx="4" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="406" y="111" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Unit / Pkg</text>
    <path d="M250 119 L250 132" stroke={B} strokeWidth="2"/>
    <polygon points="244,130 250,142 256,130" fill={B}/>
    <rect x="80" y="145" width="340" height="36" rx="6" fill={FD}/>
    <text x="250" y="168" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">PAINT-ASIAN-5L-WHITE-DRUM</text>
    <text x="250" y="205" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">✓ Auto-generated · ✓ No duplicates · ✓ Bulk rename supported</text>
    {["ITC-BISCUIT-200G-OREO-PKT","PEPSI-COLA-500ML-PET-BOTTLE","SAMSUNG-TV-55IN-QLED-BOX"].map((t,i)=>(
      <g key={i}><rect x="52" y={218+i*0} width="396" height="0" rx="2" fill={FB}/><text x="60" y={234+i*0} fill={B} fontSize="7" fontFamily="monospace">{t}</text></g>
    ))}
    <line x1="52" y1="215" x2="448" y2="215" stroke={BL} strokeWidth="0.8"/>
    {["ITC-BISCUIT-200G-OREO-PKT","PEPSI-COLA-500ML-PET-BOTTLE","SAMSUNG-TV-55IN-QLED-BOX"].map((t,i)=>(
      <text key={i} x="60" y={228+i*14} fill={B} fontSize="6" fontFamily="monospace">{t}</text>
    ))}
  </SimpleScene>
);

const SerialTracking = () => (
  <SimpleScene badge="Serial Number Management">
    <rect x="40" y="55" width="240" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="40" y="55" width="240" height="26" rx="8" fill={FD}/>
    <text x="160" y="72" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Serial Audit Trail</text>
    {[{sn:"SN-001-2024",s:"Sold",c:"#22c55e"},{sn:"SN-002-2024",s:"In Stock",c:B},{sn:"SN-003-2024",s:"In Transit",c:"#eab308"},{sn:"SN-004-2024",s:"Returned",c:"#ef4444"},{sn:"SN-005-2024",s:"Dispatched",c:"#22c55e"},{sn:"SN-006-2024",s:"In Stock",c:B}].map(({sn,s,c},i)=>(
      <g key={i}><rect x="48" y={90+i*28} width="224" height="22" rx="4" fill={FB} stroke={B} strokeWidth="0.5"/>
      <circle cx="62" cy={101+i*28} r="5" fill={c}/>
      <text x="75" y={104+i*28} fill={B} fontSize="7" fontFamily="monospace">{sn}</text>
      <text x="210" y={104+i*28} textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="sans-serif">{s}</text></g>
    ))}
    <rect x="298" y="55" width="180" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="298" y="55" width="180" height="26" rx="8" fill={FD}/>
    <text x="388" y="72" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Scan to Track</text>
    <rect x="320" y="90" width="136" height="80" rx="6" fill={FB} stroke={B} strokeWidth="1.5"/>
    <line x1="320" y1="100" x2="340" y2="100" stroke={B} strokeWidth="2"/><line x1="456" y1="100" x2="436" y2="100" stroke={B} strokeWidth="2"/>
    <line x1="320" y1="160" x2="340" y2="160" stroke={B} strokeWidth="2"/><line x1="456" y1="160" x2="436" y2="160" stroke={B} strokeWidth="2"/>
    <text x="388" y="138" textAnchor="middle" fill={B} fontSize="8" fontFamily="monospace">SN-003-2024</text>
    <text x="388" y="152" textAnchor="middle" fill="#eab308" fontSize="7" fontFamily="sans-serif">In Transit →</text>
    <rect x="310" y="182" width="156" height="78" rx="6" fill="white" stroke={B} strokeWidth="1"/>
    <text x="388" y="196" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">Movement History</text>
    <text x="318" y="210" fill={B} fontSize="6" fontFamily="sans-serif">Mar 1 — Purchased from vendor</text>
    <text x="318" y="222" fill={B} fontSize="6" fontFamily="sans-serif">Mar 3 — Moved to godown B</text>
    <text x="318" y="234" fill="#eab308" fontSize="6" fontFamily="sans-serif">Mar 5 — Dispatched to Delhi</text>
    <text x="318" y="246" fill={B} fontSize="6" fontFamily="sans-serif">Expected: Mar 7</text>
  </SimpleScene>
);

const WarehouseRack = () => (
  <SimpleScene badge="Rack / Bin Stock Management">
    <rect x="40" y="52" width="420" height="218" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <text x="250" y="80" textAnchor="middle" fill={B} fontSize="10" fontWeight="bold" fontFamily="sans-serif">Warehouse Floor Plan</text>
    {["A","B","C","D"].map((row,ri)=>(
      <g key={ri}>
        <text x="54" y={102+ri*44} fill={B} fontSize="9" fontWeight="bold" fontFamily="sans-serif">Row {row}</text>
        {[1,2,3,4,5,6,7,8].map(bin=>(
          <g key={bin}>
            <rect x={70+bin*42} y={88+ri*44} width="36" height="30" rx="3" fill={Math.random()>0.3?FM:FB} stroke={B} strokeWidth="1"/>
            <text x={88+bin*42} y={100+ri*44} textAnchor="middle" fill={B} fontSize="5.5" fontFamily="monospace">{row}{bin}</text>
            <text x={88+bin*42} y={111+ri*44} textAnchor="middle" fill={B} fontSize="5" fontFamily="sans-serif">{Math.random()>0.3?"FULL":"OPEN"}</text>
          </g>
        ))}
      </g>
    ))}
    <rect x="52" y="232" width="396" height="26" rx="5" fill={FD}/>
    <text x="250" y="249" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Live Stock: 1,240 SKUs · 3 Godowns · FIFO/LIFO Picking</text>
  </SimpleScene>
);

const BomKit = () => (
  <SimpleScene badge="KIT Items & Bill of Materials">
    <rect x="170" y="38" width="160" height="48" rx="8" fill={FD} stroke={B} strokeWidth="2"/>
    <text x="250" y="58" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">KIT: Desktop PC</text>
    <text x="250" y="72" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Assembly BOM</text>
    {[{label:"CPU × 1",x:60,y:130},{label:"RAM × 2",x:180,y:130},{label:"SSD × 1",x:300,y:130},{label:"Cabinet",x:420,y:130},{label:"Monitor",x:60,y:220},{label:"Keyboard",x:180,y:220},{label:"Mouse × 1",x:300,y:220},{label:"Power UPS",x:420,y:220}].map(({label,x,y},i)=>(
      <g key={i}>
        <line x1="250" y1="86" x2={x+40} y2={y} stroke={BL} strokeWidth="1" strokeDasharray="4,3"/>
        <rect x={x} y={y} width="80" height="32" rx="5" fill="white" stroke={B} strokeWidth="1.5"/>
        <text x={x+40} y={y+12} textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">{label.split("×")[0]}</text>
        <text x={x+40} y={y+24} textAnchor="middle" fill={BD} fontSize="6" fontWeight="bold" fontFamily="sans-serif">× {label.includes("×")?label.split("×")[1].trim():"1"}</text>
      </g>
    ))}
    <circle cx="250" cy="86" r="12" fill={FM} stroke={B} strokeWidth="2"/>
    <text x="250" y="91" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">BOM</text>
  </SimpleScene>
);

const QualityCheck = () => (
  <SimpleScene badge="Quality Control (QC)">
    <Person cx={130} cy={145} shirt={FM}/>
    <path d="M156 168 Q178 172 190 180" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="192" y="60" width="268" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="192" y="60" width="268" height="28" rx="8" fill={FD}/>
    <text x="326" y="79" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">QC Inspection Sheet</text>
    {[{label:"Visual Defects",result:"PASS",c:"#22c55e"},{label:"Dimensions",result:"PASS",c:"#22c55e"},{label:"Weight Check",result:"PASS",c:"#22c55e"},{label:"Moisture Level",result:"FAIL",c:"#ef4444"},{label:"Colour Match",result:"PASS",c:"#22c55e"},{label:"Barcode Scan",result:"PASS",c:"#22c55e"},{label:"Label Accuracy",result:"REVIEW",c:"#eab308"}].map(({label,result,c},i)=>(
      <g key={i}><rect x="200" y={96+i*24} width="252" height="18" rx="3" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.5"/>
      <text x="210" y={108+i*24} fill={B} fontSize="7" fontFamily="sans-serif">{label}</text>
      <rect x="376" y={98+i*24} width="68" height="14" rx="3" fill={c} opacity="0.2" stroke={c} strokeWidth="1"/>
      <text x="410" y={108+i*24} textAnchor="middle" fill={c} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{result}</text></g>
    ))}
    <rect x="200" y="270" width="252" height="22" rx="5" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="326" y="285" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">6/7 PASSED — 1 QUARANTINED</text>
  </SimpleScene>
);

const SalesActivity = () => (
  <SimpleScene badge="Sales Activity Management (SAM)">
    <Person cx={100} cy={150} shirt={FM}/>
    <path d="M127 140 Q150 125 165 115" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="168" y="58" width="300" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="168" y="58" width="300" height="28" rx="8" fill={FD}/>
    <text x="318" y="77" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Field Sales Tracker</text>
    <circle cx="225" cy="160" r="52" fill={FB} stroke={B} strokeWidth="1.5"/>
    <text x="225" y="152" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Target</text>
    <text x="225" y="168" textAnchor="middle" fill={BD} fontSize="16" fontWeight="bold" fontFamily="sans-serif">78%</text>
    <circle cx="225" cy="160" r="52" fill="none" stroke={BL} strokeWidth="8"/>
    <circle cx="225" cy="160" r="52" fill="none" stroke={B} strokeWidth="8" strokeDasharray="255 327" strokeDashoffset="82"/>
    {[{label:"Visits Today",val:"14"},{label:"Orders Booked",val:"8"},{label:"Collections",val:"₹82K"},{label:"New Leads",val:"3"}].map(({label,val},i)=>(
      <g key={i}><rect x="290" y={92+i*46} width="164" height="38" rx="6" fill={FB} stroke={B} strokeWidth="1"/>
      <text x="372" y={108+i*46} textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">{label}</text>
      <text x="372" y={124+i*46} textAnchor="middle" fill={BD} fontSize="13" fontWeight="bold" fontFamily="sans-serif">{val}</text></g>
    ))}
  </SimpleScene>
);

const ForexBooking = () => (
  <SimpleScene badge="Currency Forward Booking">
    <rect x="40" y="58" width="420" height="210" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="40" y="58" width="420" height="28" rx="8" fill={FD}/>
    <text x="250" y="77" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Forex Forward Contracts</text>
    {[{curr:"USD/INR",rate:"83.42",contract:"₹50L",maturity:"Apr 30",status:"Open",c:B},{curr:"EUR/INR",rate:"90.15",contract:"₹30L",maturity:"May 15",status:"Hedged",c:"#22c55e"},{curr:"GBP/INR",rate:"105.8",contract:"₹20L",maturity:"Jun 01",status:"Open",c:B},{curr:"AED/INR",rate:"22.70",contract:"₹15L",maturity:"Apr 20",status:"Settled",c:"#22c55e"}].map(({curr,rate,contract,maturity,status,c},i)=>(
      <g key={i}><rect x="48" y={94+i*40} width="404" height="32" rx="4" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.5"/>
      <text x="70" y={113+i*40} fill={B} fontSize="8" fontWeight="bold" fontFamily="monospace">{curr}</text>
      <text x="160" y={113+i*40} fill={B} fontSize="8" fontFamily="sans-serif">Rate: ₹{rate}</text>
      <text x="260" y={113+i*40} fill={B} fontSize="8" fontFamily="sans-serif">{contract}</text>
      <text x="350" y={113+i*40} fill={B} fontSize="8" fontFamily="sans-serif">{maturity}</text>
      <rect x="400" y={98+i*40} width="44" height="16" rx="3" fill={c} opacity="0.15" stroke={c} strokeWidth="1"/>
      <text x="422" y={109+i*40} textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">{status}</text></g>
    ))}
    <rect x="48" y="258" width="180" height="22" rx="5" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="138" y="273" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">MTM Gain/Loss: ₹ +2.4L</text>
    <rect x="268" y="258" width="184" height="22" rx="5" fill={FM} stroke={B} strokeWidth="1"/>
    <text x="360" y="273" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Hedge Ratio: 72%</text>
  </SimpleScene>
);

const DataBackup = () => (
  <SimpleScene badge="Smart Backup++">
    <Cloud cx={250} cy={100} rw={80} rh={40}/>
    <text x="250" y="80" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Cloud Storage</text>
    <rect x="180" y="56" width="140" height="28" rx="4" fill={FD}/>
    <text x="250" y="65" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">Google Drive · AWS S3</text>
    <text x="250" y="76" textAnchor="middle" fill={BL} fontSize="6" fontFamily="sans-serif">Auto Backup Active</text>
    {[{label:"Backup v3",time:"Today 11:00",size:"2.4 GB",c:"#22c55e"},{label:"Backup v2",time:"Yesterday",size:"2.3 GB",c:"#22c55e"},{label:"Backup v1",time:"2 days ago",size:"2.1 GB",c:"#22c55e"}].map(({label,time,size,c},i)=>(
      <g key={i}>
        <rect x={80+i*120} y="148" width="104" height="80" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
        <rect x={80+i*120} y="148" width="104" height="22" rx="6" fill={FB}/>
        <text x={132+i*120} y="164" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{label}</text>
        <text x={132+i*120} y="180" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">{time}</text>
        <text x={132+i*120} y="194" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">{size}</text>
        <circle cx={132+i*120} cy="210" r="8" fill="#22c55e" opacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <path d={`M${126+i*120} 210 L${131+i*120} 214 L${139+i*120} 206`} stroke="#16a34a" strokeWidth="1.5" fill="none"/>
        <line x1={132+i*120} y1="140" x2={132+i*120} y2="148" stroke={B} strokeWidth="1.5" strokeDasharray="3,2"/>
      </g>
    ))}
    <rect x="80" y="246" width="340" height="28" rx="6" fill={FD}/>
    <text x="250" y="258" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Scheduled: Hourly · Daily · Weekly</text>
    <text x="250" y="270" textAnchor="middle" fill={BL} fontSize="6" fontFamily="sans-serif">Compression · Versioning · 1-Click Restore</text>
  </SimpleScene>
);

const DigitalSignature = () => (
  <SimpleScene badge="Digitally Signed Invoice (DSC)">
    <rect x="80" y="52" width="200" height="240" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="80" y="52" width="200" height="26" rx="8" fill={FD}/>
    <text x="180" y="70" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TAX INVOICE</text>
    <line x1="92" y1="90" x2="268" y2="90" stroke={B} strokeWidth="0.8"/>
    <line x1="92" y1="100" x2="250" y2="100" stroke={B} strokeWidth="0.8"/>
    <line x1="92" y1="110" x2="245" y2="110" stroke={B} strokeWidth="0.8"/>
    <line x1="92" y1="130" x2="268" y2="130" stroke={B} strokeWidth="0.5"/>
    <line x1="92" y1="140" x2="268" y2="140" stroke={B} strokeWidth="0.5"/>
    <line x1="92" y1="150" x2="268" y2="150" stroke={B} strokeWidth="0.5"/>
    <line x1="92" y1="160" x2="268" y2="160" stroke={B} strokeWidth="0.5"/>
    <line x1="92" y1="200" x2="168" y2="200" stroke={B} strokeWidth="1"/>
    <text x="130" y="215" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Authorised Sign.</text>
    <rect x="90" y="220" width="170" height="60" rx="6" fill={FM} stroke={B} strokeWidth="2"/>
    <text x="175" y="240" textAnchor="middle" fill={BD} fontSize="7" fontWeight="bold" fontFamily="sans-serif">🔏 DIGITALLY SIGNED</text>
    <text x="175" y="254" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Class 3 DSC — Verified</text>
    <text x="175" y="268" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">SHA-256 · Tamper-proof</text>
    <rect x="296" y="100" width="170" height="145" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="296" y="100" width="170" height="26" rx="8" fill={FM}/>
    <text x="381" y="117" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">DSC Token</text>
    <rect x="320" y="138" width="122" height="80" rx="6" fill={FB} stroke={B} strokeWidth="1.5"/>
    <rect x="336" y="154" width="90" height="14" rx="3" fill={FD}/>
    <text x="381" y="165" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">CN=Company Name</text>
    <text x="381" y="185" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Valid: 2024–2026</text>
    <text x="381" y="200" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Issuer: eMudhra CA</text>
    <path d="M381 224 Q381 210 395 210 L400 214 Q415 210 415 224 Q415 238 400 242 L381 265 Q376 270 371 265 Q366 260 371 255 L394 238 Q387 238 381 224Z" fill={FM} stroke={B} strokeWidth="1.5"/>
  </SimpleScene>
);

const FileAttachment = () => (
  <SimpleScene badge="Multi File Attachment">
    <rect x="80" y="58" width="200" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="80" y="58" width="200" height="26" rx="8" fill={FD}/>
    <text x="180" y="76" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Sales Voucher #1042</text>
    <line x1="92" y1="95" x2="268" y2="95" stroke={B} strokeWidth="0.8"/>
    <line x1="92" y1="105" x2="255" y2="105" stroke={B} strokeWidth="0.8"/>
    <line x1="92" y1="115" x2="248" y2="115" stroke={B} strokeWidth="0.8"/>
    <text x="90" y="140" fill={B} fontSize="7" fontFamily="sans-serif">Party: Raj Enterprises</text>
    <text x="90" y="153" fill={B} fontSize="7" fontFamily="sans-serif">Amount: ₹45,500</text>
    <text x="90" y="166" fill={B} fontSize="7" fontFamily="sans-serif">Date: 15-Mar-2024</text>
    <rect x="90" y="180" width="180" height="18" rx="4" fill={FM}/>
    <text x="180" y="193" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">📎 Attachments (3)</text>
    <rect x="90" y="204" width="180" height="14" rx="3" fill={FB} stroke={B} strokeWidth="0.5"/>
    <text x="98" y="214" fill={B} fontSize="6.5" fontFamily="sans-serif">📄 Invoice.pdf (125 KB)</text>
    <rect x="90" y="222" width="180" height="14" rx="3" fill={FB} stroke={B} strokeWidth="0.5"/>
    <text x="98" y="232" fill={B} fontSize="6.5" fontFamily="sans-serif">🖼 Proof.jpg (240 KB)</text>
    <rect x="90" y="240" width="180" height="14" rx="3" fill={FB} stroke={B} strokeWidth="0.5"/>
    <text x="98" y="250" fill={B} fontSize="6.5" fontFamily="sans-serif">📋 PO.docx (88 KB)</text>
    {[{t:"PDF",c:"#ef4444",x:300,y:80},{t:"IMG",c:"#eab308",x:360,y:105},{t:"DOC",c:B,x:322,y:150},{t:"XLS",c:"#22c55e",x:390,y:168},{t:"ZIP",c:"#8b5cf6",x:308,y:210}].map(({t,c,x,y},i)=>(
      <g key={i}><rect x={x} y={y} width="52" height="62" rx="5" fill="white" stroke={c} strokeWidth="1.5"/>
      <path d={`M${x+38} ${y} L${x+52} ${y+14} L${x+52} ${y} Z`} fill={c} opacity="0.3"/>
      <rect x={x+4} y={y+26} width="44" height="14" rx="2" fill={c} opacity="0.15"/>
      <text x={x+26} y={y+37} textAnchor="middle" fill={c} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{t}</text>
      <line x1={x+26} y1={y+62} x2="180" y2={y+62} stroke={BL} strokeWidth="0.8" strokeDasharray="3,2"/></g>
    ))}
  </SimpleScene>
);

const SmsAlert = () => (
  <SimpleScene badge="SMS Module">
    <Phone x={62} y={48} w={140} h={230}/>
    <rect x="71" y="66" width="122" height="206" rx="8" fill="#1e293b"/>
    {[{msg:"Invoice #1042 raised for ₹45,500. Due: 30 Mar",from:"Tally",t:"10:22 AM",bg:FM},{msg:"REMINDER: Payment overdue by 5 days. ₹24,000 pending.",from:"Tally",t:"9:00 AM",bg:"rgba(239,68,68,0.15)"},{msg:"Order dispatched. Track: DL-1234-MH",from:"Tally",t:"Yesterday",bg:FM}].map(({msg,from,t,bg},i)=>(
      <g key={i}>
        <rect x="76" y={78+i*68} width="112" height="60" rx="6" fill={bg} stroke={B} strokeWidth="0.5"/>
        <text x="84" y={92+i*68} fill={B} fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">{from}</text>
        <text x="158" y={92+i*68} textAnchor="end" fill={BL} fontSize="5" fontFamily="sans-serif">{t}</text>
        {msg.match(/.{1,28}/g)?.slice(0,3).map((line,li)=><text key={li} x="80" y={104+i*68+li*11} fill={B} fontSize="5.5" fontFamily="sans-serif">{line}</text>)}
      </g>
    ))}
    <rect x="230" y="58" width="240" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="230" y="58" width="240" height="26" rx="8" fill={FD}/>
    <text x="350" y="76" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">SMS Automation Rules</text>
    {[{trigger:"Invoice Created",action:"Send to Customer"},{trigger:"Payment Received",action:"Confirm Receipt"},{trigger:"Payment Overdue",action:"Reminder Alert"},{trigger:"Low Stock",action:"Alert Manager"},{trigger:"Dispatch Done",action:"Track SMS sent"}].map(({trigger,action},i)=>(
      <g key={i}><rect x="238" y={92+i*36} width="224" height="28" rx="4" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.5"/>
      <text x="248" y={108+i*36} fill={B} fontSize="6.5" fontFamily="sans-serif">⚡ {trigger}</text>
      <text x="380" y={108+i*36} fill={BD} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">→ {action}</text></g>
    ))}
    <rect x="238" y="282" width="224" height="22" rx="5" fill={FM}/>
    <text x="350" y="297" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Works with any SMS Gateway (MSG91 etc)</text>
  </SimpleScene>
);

const GstCalendar = () => (
  <SimpleScene badge="GST Reminder Module">
    <rect x="40" y="52" width="260" height="240" rx="10" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="40" y="52" width="260" height="36" rx="10" fill={FD}/>
    <text x="170" y="68" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">GST Filing Calendar</text>
    <text x="170" y="80" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">March 2024</text>
    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d,i)=><text key={i} x={56+i*32} y="106" textAnchor="middle" fill={B} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">{d}</text>)}
    {Array.from({length:31}).map((_,i)=>{
      const isGst=[10,15,20,30].includes(i+1);
      const isPast=i<9;
      return <g key={i}><rect x={40+(i%7)*32+8} y={114+Math.floor(i/7)*28} width="26" height="22" rx="4" fill={isGst?FM:isPast?"#f1f5f9":"white"} stroke={isGst?B:BL} strokeWidth={isGst?"1.5":"0.5"}/>
      <text x={53+(i%7)*32} y={129+Math.floor(i/7)*28} textAnchor="middle" fill={isGst?BD:B} fontSize="7.5" fontWeight={isGst?"bold":"normal"} fontFamily="sans-serif">{i+1}</text></g>;
    })}
    <rect x="316" y="52" width="152" height="240" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="316" y="52" width="152" height="26" rx="8" fill={FD}/>
    <text x="392" y="69" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Pending Returns</text>
    {[{name:"GSTR-1",due:"Mar 11",d:1,c:"#ef4444"},{name:"GSTR-3B",due:"Mar 20",d:9,c:"#eab308"},{name:"GSTR-9",due:"Mar 31",d:20,c:"#22c55e"},{name:"GSTR-7",due:"Apr 10",d:30,c:"#22c55e"},{name:"GSTR-2A",due:"Apr 15",d:35,c:"#22c55e"}].map(({name,due,d,c},i)=>(
      <g key={i}><rect x="324" y={86+i*36} width="136" height="28" rx="5" fill={FB} stroke={c} strokeWidth="1.5"/>
      <text x="334" y="101" dy={i*36} fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">{name}</text>
      <text x="334" y="109" dy={i*36} fill={B} fontSize="6.5" fontFamily="sans-serif">Due: {due}</text>
      <rect x="400" y={90+i*36} width="52" height="16" rx="4" fill={c} opacity="0.2" stroke={c} strokeWidth="1"/>
      <text x="426" y={101+i*36} textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="sans-serif">{d}d left</text></g>
    ))}
  </SimpleScene>
);

const OutstandingLedger = () => (
  <SimpleScene badge="One Click Outstanding">
    <rect x="30" y="52" width="440" height="240" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="30" y="52" width="440" height="28" rx="8" fill={FD}/>
    <text x="250" y="70" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Outstanding Ledger — Aging Analysis</text>
    <rect x="38" y="88" width="424" height="16" rx="3" fill={FM}/>
    {["Party Name","0–30 Days","31–60 Days","61–90 Days","90+ Days","Total Due"].map((h,i)=><text key={i} x={50+i*70} y="100" fill={BD} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">{h}</text>)}
    {[{name:"Raj Enterprises",d30:"₹45K",d60:"₹0",d90:"₹0",d90p:"₹0",total:"₹45K"},{name:"ABS Corp",d30:"₹22K",d60:"₹18K",d90:"₹0",d90p:"₹0",total:"₹40K"},{name:"Metro Sales",d30:"₹0",d60:"₹35K",d90:"₹28K",d90p:"₹0",total:"₹63K"},{name:"City Whole.",d30:"₹0",d60:"₹0",d90:"₹15K",d90p:"₹42K",total:"₹57K"},{name:"Global Trade",d30:"₹88K",d60:"₹0",d90:"₹0",d90p:"₹0",total:"₹88K"},{name:"North Exp.",d30:"₹0",d60:"₹22K",d90:"₹18K",d90p:"₹65K",total:"₹1.05L"}].map(({name,d30,d60,d90,d90p,total},i)=>(
      <g key={i}><rect x="38" y={108+i*26} width="424" height="22" rx="2" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.3"/>
      {[name,d30,d60,d90,d90p,total].map((v,j)=><text key={j} x={50+j*70} y={122+i*26} fill={j===5?"#ef4444":B} fontSize="7" fontWeight={j===5?"bold":"normal"} fontFamily="sans-serif">{v}</text>)}</g>
    ))}
    <rect x="38" y="268" width="424" height="16" rx="3" fill={FD}/>
    <text x="250" y="280" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Total: ₹3.93L  |  0-30: ₹1.55L  |  31-60: ₹75K  |  61-90: ₹61K  |  90+: ₹1.07L</text>
  </SimpleScene>
);

const MultiBranch = () => (
  <SimpleScene badge="Multiple Branch Management">
    <rect x="195" y="42" width="110" height="60" rx="6" fill={FD} stroke={B} strokeWidth="2"/>
    <text x="250" y="64" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Head Office</text>
    <text x="250" y="78" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Consolidated View</text>
    {[{label:"Branch 1\nGuwahati",x:48,y:152},{label:"Branch 2\nDispur",x:148,y:175},{label:"Branch 3\nJorhat",x:248,y:175},{label:"Branch 4\nTezpur",x:348,y:175},{label:"Branch 5\nSilchar",x:418,y:152}].map(({label,x,y},i)=>(
      <g key={i}>
        <line x1="250" y1="102" x2={x+36} y2={y} stroke={BL} strokeWidth="1.5" strokeDasharray="5,3"/>
        <rect x={x} y={y} width="72" height="68" rx="5" fill="white" stroke={B} strokeWidth="1.5"/>
        {label.split("\n").map((l,li)=><text key={li} x={x+36} y={y+20+li*14} textAnchor="middle" fill={B} fontSize="7" fontWeight={li===0?"bold":"normal"} fontFamily="sans-serif">{l}</text>)}
        <rect x={x+8} y={y+40} width="56" height="16" rx="3" fill={FB}/>
        <text x={x+36} y={y+52} textAnchor="middle" fill={B} fontSize="5.5" fontFamily="sans-serif">{["₹42L","₹28L","₹35L","₹19L","₹31L"][i]} Revenue</text>
      </g>
    ))}
    <rect x="100" y="252" width="300" height="38" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <text x="250" y="268" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Total Revenue: ₹1.55 Cr</text>
    <text x="250" y="282" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Real-time sync · Inter-branch transfers</text>
  </SimpleScene>
);

const ExcelMagic = () => (
  <SimpleScene badge="Sheet Magic — Excel Report Writer">
    <rect x="40" y="58" width="190" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="40" y="58" width="190" height="26" rx="8" fill={FD}/>
    <text x="135" y="76" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime Report</text>
    {[0,1,2,3,4,5,6].map(i=>(
      <g key={i}><rect x="48" y={92+i*24} width="174" height="18" rx="2" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.5"/>
      <line x1="108" y1={92+i*24} x2="108" y2={110+i*24} stroke={BL} strokeWidth="0.8"/>
      <line x1="154" y1={92+i*24} x2="154" y2={110+i*24} stroke={BL} strokeWidth="0.8"/>
      <line x1="198" y1={92+i*24} x2="198" y2={110+i*24} stroke={BL} strokeWidth="0.8"/></g>
    ))}
    <path d="M238 165 L260 155 L260 165 L282 165 L282 171 L260 171 L260 181Z" fill={B}/>
    <text x="262" y="204" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Export</text>
    <rect x="290" y="58" width="180" height="220" rx="8" fill="white" stroke="#22c55e" strokeWidth="2"/>
    <rect x="290" y="58" width="180" height="26" rx="8" fill="#16a34a"/>
    <text x="380" y="76" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Excel Sheet</text>
    <rect x="298" y="92" width="164" height="14" rx="0" fill="#166534"/>
    {["Ledger","Dr Amount","Cr Amount","Balance"].map((h,i)=><text key={i} x={306+i*40} y="103" fill="white" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">{h}</text>)}
    {[0,1,2,3,4,5,6].map(i=>(
      <g key={i}><rect x="298" y={108+i*20} width="164" height="18" rx="0" fill={i%2===0?"#f0fdf4":"white"} stroke="#bbf7d0" strokeWidth="0.5"/>
      <line x1="338" y1={108+i*20} x2="338" y2={126+i*20} stroke="#bbf7d0" strokeWidth="0.8"/>
      <line x1="378" y1={108+i*20} x2="378" y2={126+i*20} stroke="#bbf7d0" strokeWidth="0.8"/>
      <line x1="418" y1={108+i*20} x2="418" y2={126+i*20} stroke="#bbf7d0" strokeWidth="0.8"/></g>
    ))}
    <rect x="298" y="252" width="164" height="20" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>
    <text x="380" y="266" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Auto Charts + Pivot Ready</text>
  </SimpleScene>
);

const AuditLog = () => (
  <SimpleScene badge="Audit Trail with Voucher History">
    <rect x="30" y="52" width="440" height="235" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="30" y="52" width="440" height="28" rx="8" fill={FD}/>
    <text x="250" y="70" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Voucher Change History — Audit Trail</text>
    <rect x="38" y="88" width="424" height="16" rx="3" fill={FM}/>
    {["Voucher","User","Field Changed","Before","After","Time"].map((h,i)=><text key={i} x={46+i*72} y="100" fill={BD} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">{h}</text>)}
    {[{v:"SV-1042",u:"Priya",f:"Amount",before:"₹42,000",after:"₹45,500",t:"10:24 AM"},{v:"PV-0221",u:"Rahul",f:"Party Name",before:"Raj Ent.",after:"Raj Enterprises",t:"09:45 AM"},{v:"JV-0091",u:"Admin",f:"Date",before:"14-Mar",after:"15-Mar",t:"09:12 AM"},{v:"SV-1038",u:"Priya",f:"GST Rate",before:"12%",after:"18%",t:"Yesterday"},{v:"PV-0219",u:"Rahul",f:"Deleted",before:"PV-0219",after:"—",t:"2d ago"}].map(({v,u,f,before,after,t},i)=>(
      <g key={i}><rect x="38" y={108+i*24} width="424" height="20" rx="2" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.3"/>
      <text x="46" y={121+i*24} fill={B} fontSize="6.5" fontFamily="monospace">{v}</text>
      <text x="118" y={121+i*24} fill={B} fontSize="6.5" fontFamily="sans-serif">{u}</text>
      <text x="190" y={121+i*24} fill={B} fontSize="6.5" fontFamily="sans-serif">{f}</text>
      <text x="262" y={121+i*24} fill="#ef4444" fontSize="6.5" fontFamily="sans-serif">{before}</text>
      <text x="334" y={121+i*24} fill="#22c55e" fontSize="6.5" fontFamily="sans-serif">{after}</text>
      <text x="406" y={121+i*24} fill={BL} fontSize="6" fontFamily="sans-serif">{t}</text></g>
    ))}
    <rect x="38" y="232" width="424" height="44" rx="6" fill={FB} stroke={B} strokeWidth="1"/>
    <text x="250" y="250" textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">⚠ Tamper-proof log · Cannot be edited or deleted by any user</text>
    <text x="250" y="265" textAnchor="middle" fill={BL} fontSize="6.5" fontFamily="sans-serif">Filter by: User · Date Range · Voucher Type · Field Name</text>
  </SimpleScene>
);

const SecurityAccess = () => (
  <SimpleScene badge="Advance Transaction Level Security">
    <circle cx="250" cy="140" r="90" fill={FM} stroke={B} strokeWidth="2"/>
    <circle cx="250" cy="140" r="66" fill="white" stroke={B} strokeWidth="1.5"/>
    <circle cx="250" cy="140" r="42" fill={FB} stroke={B} strokeWidth="1"/>
    <rect x="232" y="108" width="36" height="30" rx="4" fill="white" stroke={B} strokeWidth="2"/>
    <path d="M237 108 Q237 96 250 96 Q263 96 263 108" stroke={B} strokeWidth="2" fill="none"/>
    <circle cx="250" cy="124" r="5" fill={B}/>
    <line x1="250" y1="129" x2="250" y2="136" stroke={B} strokeWidth="2"/>
    {[{label:"Voucher Types",x:62,y:80},{label:"Amount Limit",x:358,y:80},{label:"Date Range",x:62,y:188},{label:"Field Level",x:358,y:188},{label:"Role-Based",x:62,y:134},{label:"Geo Restrict",x:358,y:134}].map(({label,x,y},i)=>(
      <g key={i}>
        <rect x={x} y={y} width="88" height="28" rx="5" fill="white" stroke={B} strokeWidth="1.5"/>
        <text x={x+44} y={y+12} textAnchor="middle" fill={B} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">{label}</text>
        <text x={x+44} y={y+23} textAnchor="middle" fill={BL} fontSize="5.5" fontFamily="sans-serif">Configurable</text>
        <line x1={x+(x<200?88:0)} y1={y+14} x2={x<200?210:250} y2="140" stroke={BL} strokeWidth="0.8" strokeDasharray="4,3"/>
      </g>
    ))}
    <rect x="120" y="250" width="260" height="40" rx="8" fill={FD} stroke={B} strokeWidth="1.5"/>
    <text x="250" y="266" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Zero Unauthorised Access</text>
    <text x="250" y="280" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Multi-user · Multi-branch compatible</text>
  </SimpleScene>
);

const ProductionPlan = () => (
  <SimpleScene badge="Material Requirement Planning">
    <rect x="30" y="52" width="440" height="230" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="30" y="52" width="440" height="28" rx="8" fill={FD}/>
    <text x="250" y="70" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">MRP — Auto Purchase Planning</text>
    <rect x="38" y="88" width="180" height="100" rx="6" fill={FB} stroke={B} strokeWidth="1.5"/>
    <text x="128" y="103" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Sales Forecast</text>
    {["Apr: 500 units","May: 650 units","Jun: 480 units","Jul: 720 units"].map((t,i)=>(
      <g key={i}><rect x="46" y={112+i*18} width="164" height="14" rx="3" fill="white" stroke={B} strokeWidth="0.5"/>
      <text x="56" y={122+i*18} fill={B} fontSize="7" fontFamily="sans-serif">{t}</text></g>
    ))}
    <rect x="38" y="198" width="180" height="60" rx="6" fill={FB} stroke={B} strokeWidth="1.5"/>
    <text x="128" y="213" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Current Stock</text>
    <text x="128" y="232" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Raw Material A: 120 units</text>
    <text x="128" y="247" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="sans-serif">⚠ Material B: 0 units</text>
    <path d="M226 140 L256 130 L256 140 L280 140 L280 146 L256 146 L256 156Z" fill={B}/>
    <text x="256" y="174" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">MRP Engine</text>
    <rect x="286" y="88" width="176" height="180" rx="6" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="286" y="88" width="176" height="26" rx="6" fill={FM}/>
    <text x="374" y="105" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Auto Purchase Orders</text>
    {[{item:"Material B",qty:"500 units",v:"Vendor X"},{item:"Component C",qty:"200 units",v:"Vendor Y"},{item:"Packaging",qty:"1000 pcs",v:"Local Co."}].map(({item,qty,v},i)=>(
      <g key={i}><rect x="292" y={120+i*52} width="164" height="44" rx="4" fill={FB} stroke={B} strokeWidth="1"/>
      <text x="300" y={134+i*52} fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{item}</text>
      <text x="300" y={146+i*52} fill={B} fontSize="6.5" fontFamily="sans-serif">Qty: {qty}</text>
      <text x="300" y={158+i*52} fill={BL} fontSize="6" fontFamily="sans-serif">Vendor: {v}</text>
      <circle cx="444" cy={138+i*52} r="8" fill="#22c55e" opacity="0.2" stroke="#22c55e" strokeWidth="1"/>
      <path d={`M439 ${138+i*52} L442 ${142+i*52} L450 ${133+i*52}`} stroke="#16a34a" strokeWidth="1.5" fill="none"/></g>
    ))}
  </SimpleScene>
);

const VoucherSeries = () => (
  <SimpleScene badge="Auto / Manual Voucher Numbering">
    <rect x="40" y="58" width="420" height="220" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="40" y="58" width="420" height="28" rx="8" fill={FD}/>
    <text x="250" y="76" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Voucher Numbering Configuration</text>
    {[{type:"Sales Invoice",prefix:"SI",suffix:"MUM",series:"0001→",ex:"SI-0001-MUM"},{type:"Purchase Voucher",prefix:"PV",suffix:"DLH",series:"0001→",ex:"PV-0001-DLH"},{type:"Journal Entry",prefix:"JE",suffix:"",series:"0001→",ex:"JE/2024/0001"},{type:"Credit Note",prefix:"CN",suffix:"",series:"0001→",ex:"CN-0001"},{type:"Debit Note",prefix:"DN",suffix:"",series:"0001→",ex:"DN-0001"}].map(({type,prefix,suffix,series,ex},i)=>(
      <g key={i}><rect x="48" y={94+i*34} width="404" height="28" rx="4" fill={i%2===0?FB:"white"} stroke={B} strokeWidth="0.5"/>
      <text x="58" y={112+i*34} fill={B} fontSize="7.5" fontFamily="sans-serif">{type}</text>
      <rect x="188" y={98+i*34} width="38" height="16" rx="3" fill={FM}/>
      <text x="207" y={109+i*34} textAnchor="middle" fill={BD} fontSize="7" fontWeight="bold" fontFamily="monospace">{prefix}</text>
      <rect x="232" y={98+i*34} width="38" height="16" rx="3" fill={FM}/>
      <text x="251" y={109+i*34} textAnchor="middle" fill={BD} fontSize="7" fontWeight="bold" fontFamily="monospace">{suffix||"—"}</text>
      <text x="280" y={112+i*34} fill={B} fontSize="7" fontFamily="monospace">{series}</text>
      <rect x="310" y={98+i*34} width="132" height="16" rx="3" fill={FD}/>
      <text x="376" y={109+i*34} textAnchor="middle" fill={BD} fontSize="7" fontWeight="bold" fontFamily="monospace">{ex}</text></g>
    ))}
    <rect x="48" y="265" width="404" height="22" rx="5" fill={FM}/>
    <text x="250" y="280" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Auto-reset each financial year · Gap detection · Duplicate prevention</text>
  </SimpleScene>
);

const ApprovalChain = () => (
  <SimpleScene badge="Transaction Authorisation">
    <rect x="170" y="38" width="160" height="50" rx="8" fill={FB} stroke={B} strokeWidth="2"/>
    <text x="250" y="60" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">High-Value Sale: ₹5,00,000</text>
    <text x="250" y="76" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Status: Pending Approval</text>
    <path d="M250 88 L250 108" stroke={B} strokeWidth="2"/>
    <polygon points="244,106 250,118 256,106" fill={B}/>
    {[{role:"Sales Manager",status:"Approved",c:"#22c55e",y:120},{role:"Finance Head",status:"Approved",c:"#22c55e",y:180},{role:"Director",status:"Pending…",c:"#eab308",y:240}].map(({role,status,c,y},i)=>(
      <g key={i}>
        <rect x="115" y={y} width="270" height="48" rx="8" fill="white" stroke={c} strokeWidth="2"/>
        <circle cx="148" cy={y+24} r="18" fill={FM} stroke={B} strokeWidth="1"/>
        <text x="148" y={y+20} textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">{role.split(" ")[0]}</text>
        <text x="148" y={y+30} textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">{role.split(" ")[1]||""}</text>
        <rect x="290" y={y+14} width="84" height="20" rx="5" fill={c} opacity="0.2" stroke={c} strokeWidth="1"/>
        <text x="332" y={y+27} textAnchor="middle" fill={c} fontSize="8" fontWeight="bold" fontFamily="sans-serif">{status}</text>
        {i<2&&<><path d="M250 168 L250 177" stroke={B} strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="244,175 250,187 256,175" fill={B}/></>}
      </g>
    ))}
    <Phone x={414} y={98} w={56} h={96}/>
    <text x="442" y="210" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Mobile</text>
    <text x="442" y="222" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Approval</text>
    <line x1="386" y1="180" x2="414" y2="170" stroke={BL} strokeWidth="1" strokeDasharray="4,3"/>
  </SimpleScene>
);

const AmcContract = () => (
  <SimpleScene badge="AMC / Annual Support Cover">
    <Person cx={120} cy={148} shirt={FM}/>
    <path d="M146 158 Q170 155 185 152" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="188" y="62" width="280" height="222" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="188" y="62" width="280" height="28" rx="8" fill={FD}/>
    <text x="328" y="80" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Annual Maintenance Contract</text>
    <text x="250" y="108" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Agreement Period: 2024 – 2025</text>
    <line x1="204" y1="116" x2="452" y2="116" stroke={BL} strokeWidth="1"/>
    {["✓ Unlimited Remote Support Tickets","✓ Scheduled Onsite Visits Included","✓ TSS Renewal Management","✓ Data Corruption Repair","✓ Tally Version Upgrades","✓ Team Training Sessions","✓ Invoice Format Updates","✓ 24×7 Emergency Support"].map((t,i)=>(
      <text key={i} x="208" y={132+i*18} fill={i<5?B:BL} fontSize="7.5" fontFamily="sans-serif">{t}</text>
    ))}
    <line x1="204" y1="278" x2="452" y2="278" stroke={BL} strokeWidth="1"/>
    <line x1="225" y1="265" x2="310" y2="265" stroke={B} strokeWidth="1.5"/>
    <text x="268" y="275" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Client Signature</text>
    <line x1="360" y1="265" x2="445" y2="265" stroke={B} strokeWidth="1.5"/>
    <text x="402" y="275" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">ABS Signature</text>
  </SimpleScene>
);

const BranchSync = () => (
  <SimpleScene badge="Data Synchronization">
    {[{x:60,y:80,label:"Guwahati HQ"},{x:360,y:80,label:"Branch Office"},{x:60,y:210,label:"Remote User"},{x:360,y:210,label:"Cloud Server"}].map(({x,y,label},i)=>(
      <g key={i}>
        <rect x={x} y={y} width="110" height="80" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
        <rect x={x+6} y={y+8} width="98" height="50" rx="3" fill={FB}/>
        {[0,1,2,3].map(j=><line key={j} x1={x+14} y1={y+18+j*12} x2={x+96} y2={y+18+j*12} stroke={B} strokeWidth="0.8"/>)}
        <text x={x+55} y={y+74} textAnchor="middle" fill={B} fontSize="7" fontWeight="600" fontFamily="sans-serif">{label}</text>
      </g>
    ))}
    <line x1="170" y1="122" x2="360" y2="122" stroke={B} strokeWidth="1.5" strokeDasharray="5,3"/>
    <polygon points="356,116 368,122 356,128" fill={B}/>
    <polygon points="174,116 162,122 174,128" fill={B}/>
    <line x1="170" y1="252" x2="360" y2="252" stroke={B} strokeWidth="1.5" strokeDasharray="5,3"/>
    <polygon points="356,246 368,252 356,258" fill={B}/>
    <polygon points="174,246 162,252 174,258" fill={B}/>
    <line x1="115" y1="162" x2="115" y2="210" stroke={B} strokeWidth="1.5" strokeDasharray="5,3"/>
    <polygon points="109,206 115,218 121,206" fill={B}/>
    <line x1="415" y1="162" x2="415" y2="210" stroke={B} strokeWidth="1.5" strokeDasharray="5,3"/>
    <polygon points="409,206 415,218 421,206" fill={B}/>
    <rect x="190" y="148" width="120" height="42" rx="8" fill={FD} stroke={B} strokeWidth="1.5"/>
    <text x="250" y="166" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Real-time</text>
    <text x="250" y="180" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Sync Engine</text>
  </SimpleScene>
);

const TrainingClass = () => (
  <SimpleScene badge="Training Programs">
    <rect x="105" y="55" width="290" height="185" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="105" y="55" width="290" height="120" rx="8" fill={FD}/>
    <text x="250" y="80" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TallyPrime Training</text>
    <text x="250" y="96" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Interactive Session — Module 3: GST</text>
    <rect x="120" y="105" width="260" height="62" rx="4" fill="white" opacity="0.1"/>
    <line x1="128" y1="118" x2="372" y2="118" stroke="white" strokeWidth="0.5" opacity="0.5"/>
    <line x1="128" y1="128" x2="372" y2="128" stroke="white" strokeWidth="0.5" opacity="0.5"/>
    <line x1="128" y1="138" x2="372" y2="138" stroke="white" strokeWidth="0.5" opacity="0.5"/>
    <line x1="128" y1="148" x2="372" y2="148" stroke="white" strokeWidth="0.5" opacity="0.5"/>
    <line x1="128" y1="158" x2="372" y2="158" stroke="white" strokeWidth="0.5" opacity="0.5"/>
    <path d="M148 145 Q160 128 172 135 Q184 142 196 125 Q208 108 220 118 Q232 128 244 115 Q256 102 268 112 Q280 122 292 108" stroke="#60a5fa" strokeWidth="2" fill="none"/>
    <line x1="250" y1="175" x2="250" y2="240" stroke={B} strokeWidth="2"/>
    <path d="M220 175 L250 155 L280 175Z" fill={B}/>
    <rect x="200" y="238" width="100" height="8" rx="2" fill={FM} stroke={B} strokeWidth="1"/>
    {[{x:48,y:235},{x:124,y:252},{x:198,y:265},{x:350,y:235},{x:406,y:252}].map(({x,y},i)=>(
      <g key={i}>
        <circle cx={x+18} cy={y-20} r="12" fill={FM} stroke={B} strokeWidth="1"/>
        <rect x={x} y={y} width="36" height="25" rx="4" fill={FB} stroke={B} strokeWidth="1"/>
        <line x1={x+6} y1={y+6} x2={x+30} y2={y+6} stroke={B} strokeWidth="0.5"/>
        <line x1={x+6} y1={y+12} x2={x+28} y2={y+12} stroke={B} strokeWidth="0.5"/>
        <line x1={x+6} y1={y+18} x2={x+25} y2={y+18} stroke={B} strokeWidth="0.5"/>
      </g>
    ))}
  </SimpleScene>
);

const InvoiceTemplate = () => (
  <SimpleScene badge="Invoice Customization Support">
    {[{x:30,rotation:-5},{x:175,rotation:0},{x:310,rotation:4}].map(({x,rotation},i)=>(
      <g key={i} transform={`rotate(${rotation},${x+100},160)`}>
        <rect x={x} y="58" width="140" height="215" rx="5" fill="white" stroke={i===1?B:BL} strokeWidth={i===1?2:"1"}/>
        <rect x={x} y="58" width="140" height="24" rx="5" fill={i===1?FD:FM}/>
        <text x={x+70} y="74" textAnchor="middle" fill={i===1?"white":B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{["Classic","Modern","Branded"][i]}</text>
        <rect x={x+8} y="88" width="58" height="36" rx="3" fill={FM}/>
        <text x={x+37} y="110" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">LOGO</text>
        <line x1={x+8} y1="132" x2={x+132} y2="132" stroke={B} strokeWidth="0.8"/>
        <line x1={x+8} y1="142" x2={x+125} y2="142" stroke={B} strokeWidth="0.8"/>
        {[0,1,2,3].map(j=><g key={j}><rect x={x+8} y={155+j*18} width="124" height="14" rx="2" fill={j%2===0?FB:"white"}/><line x1={x+72} y1={155+j*18} x2={x+72} y2={169+j*18} stroke={BL} strokeWidth="0.5"/><line x1={x+108} y1={155+j*18} x2={x+108} y2={169+j*18} stroke={BL} strokeWidth="0.5"/></g>)}
        <rect x={x+60} y="232" width="72" height="26" rx="4" fill={FM} stroke={B} strokeWidth="1"/>
        <text x={x+96} y="248" textAnchor="middle" fill={B} fontSize="6.5" fontFamily="sans-serif">₹ Total: XXXX</text>
      </g>
    ))}
    <path d="M250 40 L240 26 L260 26Z" fill={B}/>
    <text x="250" y="22" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Pick Your Design</text>
  </SimpleScene>
);

const PlatformConnect = () => (
  <SimpleScene badge="Antra CX — Connected Services">
    <Cloud cx={250} cy={88} rw={75} rh={40}/>
    <text x="250" y="66" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Antra CX Platform</text>
    <text x="250" y="78" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">Tally Connected Services</text>
    {[{label:"e-Invoice",icon:"📄",x:42,y:148},{label:"e-Way Bill",icon:"🚛",x:142,y:175},{label:"Banking",icon:"🏦",x:242,y:148},{label:"GST Filing",icon:"📋",x:342,y:175},{label:"TallyPrime",icon:"💻",x:412,y:148}].map(({label,icon,x,y},i)=>(
      <g key={i}>
        <circle cx={x+30} cy={y+28} r="28" fill="white" stroke={B} strokeWidth="1.5"/>
        <text x={x+30} y={y+25} textAnchor="middle" fontSize="14" fontFamily="sans-serif">{icon}</text>
        <text x={x+30} y={y+42} textAnchor="middle" fill={B} fontSize="6.5" fontFamily="sans-serif">{label}</text>
        <line x1={x+30} y1={y} x2="250" y2="128" stroke={BL} strokeWidth="1" strokeDasharray="5,3"/>
      </g>
    ))}
    <rect x="90" y="255" width="320" height="42" rx="8" fill={FD} stroke={B} strokeWidth="1.5"/>
    <text x="250" y="272" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Setup · Configure · Integrate</text>
    <text x="250" y="287" textAnchor="middle" fill={BL} fontSize="7" fontFamily="sans-serif">ABS handles your Antra CX setup end-to-end</text>
  </SimpleScene>
);

const CloudSync = () => (
  <SimpleScene badge="Cloud Data Synchronization">
    <Cloud cx={250} cy={80} rw={80} rh={38}/>
    <text x="250" y="60" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Cloud Instance</text>
    <rect x="50" y="170" width="140" height="100" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="56" y="178" width="128" height="84" rx="4" fill={FB}/>
    <rect x="60" y="182" width="120" height="18" rx="2" fill={FD}/>
    <text x="120" y="195" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">On-Premise Tally</text>
    {[0,1,2,3].map(i=><rect key={i} x="64" y={206+i*14} width="112" height="10" rx="2" fill="white" opacity="0.7"/>)}
    <rect x="310" y="170" width="140" height="100" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="316" y="178" width="128" height="84" rx="4" fill={FB}/>
    <rect x="320" y="182" width="120" height="18" rx="2" fill={FD}/>
    <text x="380" y="195" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">Cloud Tally</text>
    {[0,1,2,3].map(i=><rect key={i} x="324" y={206+i*14} width="112" height="10" rx="2" fill="white" opacity="0.7"/>)}
    <line x1="190" y1="220" x2="250" y2="120" stroke={B} strokeWidth="1.5" strokeDasharray="6,4"/>
    <polygon points="246,128 254,128 250,118" fill={B} opacity="0.7"/>
    <line x1="250" y1="120" x2="310" y2="220" stroke={B} strokeWidth="1.5" strokeDasharray="6,4"/>
    <polygon points="306,212 314,212 310,222" fill={B} opacity="0.7"/>
    <rect x="195" y="208" width="110" height="28" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
    <path d="M220 218 Q230 210 240 218 Q250 226 260 218 Q270 210 280 218" stroke={B} strokeWidth="1.5" fill="none"/>
    <text x="250" y="228" textAnchor="middle" fill={B} fontSize="6.5" fontFamily="sans-serif">Real-time sync</text>
    <rect x="140" y="278" width="220" height="22" rx="6" fill={FD}/>
    <text x="250" y="293" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Zero data loss · Conflict-free merge</text>
  </SimpleScene>
);

const CloudBackup = () => (
  <SimpleScene badge="Automated Backup & Recovery">
    <Cloud cx={250} cy={80} rw={88} rh={44}/>
    <text x="250" y="56" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">3× Redundant Backup</text>
    {[{label:"Copy 1\nRegion A",x:60,c:"#22c55e"},{label:"Copy 2\nRegion B",x:210,c:"#22c55e"},{label:"Copy 3\nRegion C",x:360,c:"#22c55e"}].map(({label,x,c},i)=>(
      <g key={i}>
        <ServerRack x={x} y={145} rows={3}/>
        <line x1={x+40} y1={145} x2={250} y2={124} stroke={BL} strokeWidth="1" strokeDasharray="4,3"/>
        <text x={x+40} y={220} textAnchor="middle" fill={B} fontSize="6.5" fontFamily="sans-serif">{label.split("\n")[0]}</text>
        <text x={x+40} y={232} textAnchor="middle" fill={BL} fontSize="6" fontFamily="sans-serif">{label.split("\n")[1]}</text>
        <circle cx={x+40} cy={242} r="8" fill={c} opacity="0.2" stroke={c} strokeWidth="1"/>
        <path d={`M${x+35} 242 L${x+39} 246 L${x+46} 238`} stroke="#16a34a" strokeWidth="1.5" fill="none"/>
      </g>
    ))}
    <rect x="100" y="260" width="300" height="42" rx="8" fill="white" stroke={B} strokeWidth="1.5"/>
    <text x="250" y="276" textAnchor="middle" fill={B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">Recovery Options</text>
    <text x="250" y="291" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Point-in-time · One-click restore · RTO &lt; 1hr</text>
  </SimpleScene>
);

const ShieldCompliance = () => (
  <SimpleScene badge="Security & Compliance">
    <path d="M250 40 Q290 55 310 80 Q330 120 310 180 Q290 230 250 258 Q210 230 190 180 Q170 120 190 80 Q210 55 250 40Z" fill={FM} stroke={B} strokeWidth="2"/>
    <path d="M250 58 Q280 70 296 90 Q312 124 296 174 Q280 216 250 240 Q220 216 204 174 Q188 124 204 90 Q220 70 250 58Z" fill="white" stroke={B} strokeWidth="1"/>
    <rect x="232" y="96" width="36" height="30" rx="4" fill={FM} stroke={B} strokeWidth="1.5"/>
    <path d="M237 96 Q237 84 250 84 Q263 84 263 96" stroke={B} strokeWidth="1.5" fill="none"/>
    <circle cx="250" cy="112" r="5" fill={BD}/>
    <line x1="250" y1="117" x2="250" y2="124" stroke={BD} strokeWidth="1.5"/>
    <text x="250" y="148" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">256-bit AES</text>
    <text x="250" y="162" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Encryption</text>
    <text x="250" y="180" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">TLS in Transit</text>
    <text x="250" y="198" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">2FA Enabled</text>
    {[{label:"IT Act\nCompliant",x:38,y:88},{label:"DDoS\nProtection",x:388,y:88},{label:"Firewall\nManaged",x:38,y:200},{label:"Access\nLogging",x:388,y:200}].map(({label,x,y},i)=>(
      <g key={i}><rect x={x} y={y} width="72" height="52" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
      {label.split("\n").map((l,li)=><text key={li} x={x+36} y={y+22+li*16} textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">{l}</text>)}</g>
    ))}
  </SimpleScene>
);

const MultiDevice = () => (
  <SimpleScene badge="Cross-Platform Access">
    <Monitor x={140} y={62} w={220} h={140}/>
    <rect x="148" y="70" width="204" height="124" rx="3" fill={FB}/>
    <rect x="152" y="74" width="196" height="24" rx="2" fill={FD}/>
    <text x="250" y="90" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TallyPrime</text>
    {[0,1,2,3].map(i=><rect key={i} x={160+i*46} y={116} width={38} height={56} rx="3" fill={i%2===0?FM:"white"} stroke={B} strokeWidth="0.8"/>)}
    <text x="250" y="218" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Windows · Mac</text>
    <Phone x={42} y={148} w={60} h={102}/>
    <text x="72" y="267" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Android</text>
    <Phone x={398} y={148} w={60} h={102}/>
    <text x="428" y="267" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">iOS</text>
    <rect x="30" y="82" width="100" height="62" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
    <rect x="38" y="90" width="84" height="46" rx="3" fill={FB}/>
    <text x="80" y="122" textAnchor="middle" fill={B} fontSize="6" fontFamily="sans-serif">Linux / Browser</text>
    <line x1="130" y1="113" x2="140" y2="130" stroke={BL} strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="102" y1="199" x2="140" y2="185" stroke={BL} strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="398" y1="199" x2="360" y2="185" stroke={BL} strokeWidth="1" strokeDasharray="3,2"/>
    <rect x="130" y="280" width="240" height="22" rx="6" fill={FD}/>
    <text x="250" y="295" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Secure remote desktop · No install required</text>
  </SimpleScene>
);

const MobileApproval = () => (
  <SimpleScene badge="Transaction Approval App">
    <Phone x={148} y={38} w={204} h={268}/>
    <rect x="158" y="58" width="184" height="240" rx="10" fill={FB}/>
    <rect x="158" y="58" width="184" height="30" rx="10" fill={FD}/>
    <text x="250" y="78" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Approval Queue (3)</text>
    {[{type:"Sale",amount:"₹5,00,000",party:"Raj Ent.",tag:"High Value"},{type:"Credit Note",amount:"₹45,000",party:"ABS Corp",tag:"Discount"},{type:"Journal",amount:"₹2,10,000",party:"Internal",tag:"Adjustment"}].map(({type,amount,party,tag},i)=>(
      <g key={i}>
        <rect x="166" y={96+i*68} width="168" height="58" rx="6" fill="white" stroke={B} strokeWidth="1"/>
        <rect x="170" y="100" dy={i*68} width="72" height="14" rx="3" fill={FM}/>
        <text x="206" y="111" dy={i*68} textAnchor="middle" fill={B} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">{type}</text>
        <text x="174" y="126" dy={i*68} fill={BD} fontSize="9" fontWeight="bold" fontFamily="sans-serif">{amount}</text>
        <text x="174" y="140" dy={i*68} fill={B} fontSize="6.5" fontFamily="sans-serif">{party}</text>
        <rect x="282" y="100" dy={i*68} width="44" height="14" rx="3" fill={FM} stroke={B} strokeWidth="0.8"/>
        <text x="304" y="111" dy={i*68} textAnchor="middle" fill={BD} fontSize="5.5" fontFamily="sans-serif">{tag}</text>
        <rect x="170" y="146" dy={i*68} width="58" height="16" rx="5" fill="#22c55e" opacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <text x="199" y="157" dy={i*68} textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold" fontFamily="sans-serif">✓ Approve</text>
        <rect x="235" y="146" dy={i*68} width="58" height="16" rx="5" fill="#ef4444" opacity="0.15" stroke="#ef4444" strokeWidth="1"/>
        <text x="264" y="157" dy={i*68} textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="sans-serif">✗ Reject</text>
      </g>
    ))}
    <rect x="38" y="160" width="94" height="60" rx="8" fill={FM} stroke={B} strokeWidth="1.5"/>
    <text x="85" y="182" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Push</text>
    <text x="85" y="194" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Notification</text>
    <text x="85" y="206" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Sent!</text>
    <line x1="132" y1="190" x2="148" y2="175" stroke={BL} strokeWidth="1" strokeDasharray="4,3"/>
  </SimpleScene>
);

const OrderBooking = () => (
  <SimpleScene badge="Sales Order Booking App">
    <Person cx={95} cy={148} shirt={FM}/>
    <path d="M122 135 Q145 122 162 115" stroke={B} strokeWidth={sw} fill="none"/>
    <Phone x={165} y={48} w={170} h={250}/>
    <rect x="175" y="68" width="150" height="222" rx="8" fill={FB}/>
    <rect x="175" y="68" width="150" height="28" rx="8" fill={FD}/>
    <text x="250" y="86" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Order Booking</text>
    <rect x="180" y="100" width="140" height="26" rx="4" fill="white" stroke={BL} strokeWidth="1"/>
    <text x="250" y="117" textAnchor="middle" fill={B} fontSize="8" fontFamily="sans-serif">Raj Enterprises</text>
    {[{item:"Item A",qty:5,rate:"₹240"},{item:"Item B",qty:12,rate:"₹85"},{item:"Item C",qty:3,rate:"₹620"}].map(({item,qty,rate},i)=>(
      <g key={i}>
        <rect x="180" y={132+i*38} width="140" height="32" rx="4" fill="white" stroke={B} strokeWidth="0.8"/>
        <text x="188" y={145+i*38} fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{item}</text>
        <text x="188" y={158+i*38} fill={BL} fontSize="6" fontFamily="sans-serif">{rate}/unit</text>
        <rect x="280" y={136+i*38} width="32" height="22" rx="4" fill={FM} stroke={B} strokeWidth="0.8"/>
        <text x="296" y={151+i*38} textAnchor="middle" fill={BD} fontSize="8" fontWeight="bold" fontFamily="sans-serif">{qty}</text>
      </g>
    ))}
    <rect x="180" y="250" width="140" height="30" rx="6" fill={FD}/>
    <text x="250" y="262" textAnchor="middle" fill={B} fontSize="7" fontFamily="sans-serif">Total: ₹4,380</text>
    <text x="250" y="274" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Submit Order →</text>
    <rect x="360" y="120" width="110" height="80" rx="6" fill="white" stroke={B} strokeWidth="1.5"/>
    <text x="415" y="138" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Stock Check</text>
    <text x="415" y="156" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="sans-serif">Item A: ✓ 82 left</text>
    <text x="415" y="170" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="sans-serif">Item B: ✓ 240 left</text>
    <text x="415" y="184" textAnchor="middle" fill="#eab308" fontSize="7" fontFamily="sans-serif">Item C: ⚠ 2 left</text>
    <line x1="335" y1="168" x2="360" y2="168" stroke={BL} strokeWidth="1" strokeDasharray="3,2"/>
  </SimpleScene>
);

const FieldAudit = () => (
  <SimpleScene badge="Business Audit App">
    <Person cx={105} cy={148} shirt={FM}/>
    <path d="M132 140 Q152 128 165 118" stroke={B} strokeWidth={sw} fill="none"/>
    <rect x="165" y="58" width="135" height="215" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="165" y="58" width="135" height="26" rx="8" fill={FD}/>
    <text x="232" y="75" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Stock Audit</text>
    {[{item:"Item A",expected:50,actual:48,ok:true},{item:"Item B",expected:120,actual:120,ok:true},{item:"Item C",expected:30,actual:26,ok:false},{item:"Item D",expected:80,actual:80,ok:true},{item:"Item E",expected:45,actual:39,ok:false}].map(({item,expected,actual,ok},i)=>(
      <g key={i}><rect x="173" y={90+i*32} width="119" height="26" rx="4" fill={ok?FB:"rgba(239,68,68,0.08)"} stroke={ok?B:"#ef4444"} strokeWidth="0.8"/>
      <text x="181" y={103+i*32} fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{item}</text>
      <text x="181" y={113+i*32} fill={ok?B:"#ef4444"} fontSize="6" fontFamily="sans-serif">Exp:{expected} Act:{actual}</text>
      <text x="280" y={106+i*32} textAnchor="middle" fill={ok?"#22c55e":"#ef4444"} fontSize="9" fontFamily="sans-serif">{ok?"✓":"✗"}</text></g>
    ))}
    <rect x="173" y="258" width="119" height="22" rx="4" fill={FD}/>
    <text x="232" y="273" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">3 OK · 2 Discrepancy</text>
    <rect x="318" y="80" width="152" height="200" rx="8" fill="white" stroke={B} strokeWidth="2"/>
    <rect x="318" y="80" width="152" height="26" rx="8" fill={FD}/>
    <text x="394" y="97" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Audit Checklist</text>
    {[{t:"Stock Count",done:true},{t:"GRN Match",done:true},{t:"Photo Captured",done:true},{t:"Manager Sign",done:false},{t:"Report Sent",done:false}].map(({t,done},i)=>(
      <g key={i}><rect x="326" y={114+i*30} width="136" height="22" rx="4" fill={done?"#dcfce7":FB} stroke={done?"#22c55e":B} strokeWidth="0.8"/>
      <circle cx="338" cy={125+i*30} r="7" fill={done?"#22c55e":FM} stroke={done?"#22c55e":B} strokeWidth="1"/>
      {done&&<path d={`M334 ${125+i*30} L337 ${129+i*30} L344 ${121+i*30}`} stroke="white" strokeWidth="1.5" fill="none"/>}
      <text x="350" y={128+i*30} fill={B} fontSize="7" fontFamily="sans-serif">{t}</text></g>
    ))}
    <rect x="326" y="268" width="136" height="22" rx="5" fill={FM}/>
    <text x="394" y="283" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">📍 GPS-tagged · Auto-report</text>
  </SimpleScene>
);

const GpsRoute = () => (
  <SimpleScene badge="Beat Routing & GPS Tracking">
    <rect x="48" y="48" width="404" height="240" rx="8" fill="#e8f4fd" stroke={B} strokeWidth="2"/>
    <line x1="48" y1="108" x2="452" y2="108" stroke={BL} strokeWidth="1"/>
    <line x1="48" y1="168" x2="452" y2="168" stroke={BL} strokeWidth="1"/>
    <line x1="48" y1="228" x2="452" y2="228" stroke={BL} strokeWidth="1"/>
    <line x1="128" y1="48" x2="128" y2="288" stroke={BL} strokeWidth="1"/>
    <line x1="208" y1="48" x2="208" y2="288" stroke={BL} strokeWidth="1"/>
    <line x1="288" y1="48" x2="288" y2="288" stroke={BL} strokeWidth="1"/>
    <line x1="368" y1="48" x2="368" y2="288" stroke={BL} strokeWidth="1"/>
    <path d="M95 200 Q160 130 240 145 Q310 158 380 88" stroke={B} strokeWidth="2.5" fill="none"/>
    {[{cx:95,cy:200,label:"Start\n9:00AM",n:1},{cx:160,cy:135,label:"Raj Ent.\n10:30AM",n:2},{cx:240,cy:145,label:"ABS Corp\n12:00PM",n:3},{cx:312,cy:155,label:"Metro\n2:15PM",n:4},{cx:380,cy:88,label:"City WH\n4:30PM",n:5}].map(({cx,cy,label,n},i)=>(
      <g key={i}>
        <circle cx={cx} cy={cy} r="14" fill={i===0?B:FM} stroke={B} strokeWidth="1.5"/>
        <text x={cx} y={cy+4} textAnchor="middle" fill={i===0?"white":B} fontSize="8" fontWeight="bold" fontFamily="sans-serif">{n}</text>
        <text x={cx} y={cy+26} textAnchor="middle" fill={B} fontSize="5.5" fontFamily="sans-serif">{label.split("\n")[0]}</text>
        <text x={cx} y={cy+36} textAnchor="middle" fill={BL} fontSize="5" fontFamily="sans-serif">{label.split("\n")[1]}</text>
      </g>
    ))}
    <rect x="56" y="262" width="389" height="22" rx="5" fill={FD}/>
    <text x="250" y="277" textAnchor="middle" fill={B} fontSize="7" fontWeight="bold" fontFamily="sans-serif">Live GPS tracking · Check-in/out · Route deviation alerts</text>
  </SimpleScene>
);

/* ─── SCENE REGISTRY ─────────────────────────────────────────────────────────── */
const SCENES = {
  'handshake': Handshake,
  'api-bridge': ApiBridge,
  'developer': Developer,
  'support-desk': SupportDesk,
  'cloud-server': CloudServer,
  'mobile-charts': MobileCharts,
  'software-setup': SoftwareSetup,
  'remote-connect': RemoteConnect,
  'system-upgrade': SystemUpgrade,
  'server-multi': ServerMulti,
  'audit-view': AuditView,
  'subscription-renewal': SubscriptionRenewal,
  'excel-import': ExcelImport,
  'ecommerce-store': EcommerceStore,
  'web-cms': WebCms,
  'code-bridge': CodeBridge,
  'payment-flow': PaymentFlow,
  'crm-contacts': CrmContacts,
  'api-connector': ApiConnector,
  'quickbooks-sync': QuickbooksSync,
  'invoice-design': InvoiceDesign,
  'barcode-scan': BarCodeScan,
  'supply-chain': SupplyChain,
  'item-catalog': ItemCatalog,
  'serial-tracking': SerialTracking,
  'warehouse-rack': WarehouseRack,
  'bom-kit': BomKit,
  'quality-check': QualityCheck,
  'sales-activity': SalesActivity,
  'forex-booking': ForexBooking,
  'data-backup': DataBackup,
  'digital-signature': DigitalSignature,
  'file-attachment': FileAttachment,
  'sms-alert': SmsAlert,
  'gst-calendar': GstCalendar,
  'outstanding-ledger': OutstandingLedger,
  'multi-branch': MultiBranch,
  'excel-magic': ExcelMagic,
  'audit-log': AuditLog,
  'security-access': SecurityAccess,
  'production-plan': ProductionPlan,
  'voucher-series': VoucherSeries,
  'approval-chain': ApprovalChain,
  'onsite-support': OnsiteSupport,
  'amc-contract': AmcContract,
  'branch-sync': BranchSync,
  'training-class': TrainingClass,
  'invoice-template': InvoiceTemplate,
  'platform-connect': PlatformConnect,
  'cloud-access': CloudAccess,
  'cloud-sync': CloudSync,
  'cloud-backup': CloudBackup,
  'shield-compliance': ShieldCompliance,
  'multi-device': MultiDevice,
  'biz-dashboard': BizDashboard,
  'customer-profile': CustomerProfile,
  'mobile-approval': MobileApproval,
  'order-booking': OrderBooking,
  'field-audit': FieldAudit,
  'gps-route': GpsRoute,
};

const SketchIllustration = ({ scene = 'handshake', className = '' }) => {
  const SceneComponent = SCENES[scene] || SCENES['handshake'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 500 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ maxHeight: '100%' }}
      >
        <SceneComponent />
      </svg>
    </motion.div>
  );
};

export default SketchIllustration;
