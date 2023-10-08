import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';  
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';  
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';






function Home() {
  
  const pieData = [
    { name: 'Blanco', value: 30, fill: 'white' },
    { name: 'Gap1', value: 5, fill: 'transparent' },
    { name: 'Azul Oscuro', value: 30, fill: '#000020' },
    { name: 'Gap2', value: 5, fill: 'transparent' },
    { name: 'Gris Claro', value: 30, fill: 'lightgray' },
    { name: 'Gap3', value: 5, fill: 'transparent' }
  ];

  const lineData = [
    { name: 'A', uv: 1000 },
    { name: 'B', uv: 1200 },
    { name: 'C', uv: 1100 },
    
  ];

  const barData = [
    { name: 'Sep', uv: 5, fill: 'white' },
    { name: 'Oct', uv: 10 },
    { name: 'Nov', uv: 15, fill: 'white'},
    { name: 'Dic', uv: 20 },
  ];




  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr' }}>
        <div className="card" style={{ backgroundColor: 'lightcoral' }}>
          <h4 style={{ color: '#000020', margin: '10px 0' }}>Uso de la app</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius="40%"
                outerRadius="60%"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.fill}
                    stroke={entry.fill}
                    strokeWidth={0}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card" style={{ backgroundColor: '#373840', color: '#A4A4A5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center' }}>Reporte completo</div>
          <div style={{ textAlign: 'center' }}>2023</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button
            style={{
              backgroundColor: '#242529',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              marginTop: '10px'
            }}
          >
            <i className="fa fa-download" style={{ marginRight: '20px' }}></i> Descargalo
          </button>
        </div>

        <div className="card" style={{ backgroundColor: 'gray', position: 'relative', overflow: 'hidden' }}>
  <MapContainer
    center={[51.505, -0.09]}
    zoom={13}
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  </MapContainer>
</div>


<div className="card" style={{ backgroundColor: '#373840', position: 'relative' }}>
  <div style={{ color: '#DCDCDD', textAlign: 'center' }}>
    Horarios con<br />más actividad
  </div>
  <svg width="100%" height="50" style={{ position: 'absolute', bottom: 0, left: 0 }}>
    <path d="M0 25 C 10 0, 20 50, 30 25 C 40 50, 50 0, 60 25 C 70 0, 80 50, 90 25 C 100 50, 110 0, 120 25" stroke="#EF9575" fill="transparent" />
  </svg>
</div>


<div className="card" style={{ backgroundColor: 'white', color: '#DCDCDD', position: 'relative', textAlign: 'center' }}>
  <div style={{ marginTop: '20px' }}>% de vistas al día</div>
  <br />
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '17%', border: '1px solid #A4A4A5', borderRadius: '10px', marginRight: '20px', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', color: '#242529', textAlign: 'center', padding: '5px 0', borderRadius: '15px' }}>Mon</div>
      <div style={{ textAlign: 'center', fontSize: '30px', color: '#242529', lineHeight: '1.2' }}>18</div>
    </div>
    
    <div style={{ width: '17%', border: '1px solid #A4A4A5', borderRadius: '10px', marginRight: '20px', backgroundColor: 'lightcoral', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'lightcoral', color: '#242529', textAlign: 'center', padding: '5px 0', borderRadius: '15px' }}>Tue</div>
      <div style={{ textAlign: 'center', fontSize: '30px', color: '#242529', lineHeight: '1.2' }}>19</div>
    </div>

    <div style={{ width: '17%', border: '1px solid #A4A4A5', borderRadius: '10px', marginRight: '20px', backgroundColor: 'white', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', color: '#242529', textAlign: 'center', padding: '5px 0', borderRadius: '15px' }}>Wed</div>
      <div style={{ textAlign: 'center', fontSize: '30px', color: '#242529', lineHeight: '1.2' }}>20</div>
    </div>
  </div>
  <div style={{ marginTop: '20px', fontSize: '18px', color: '#7E7E7E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ color: '#242529', fontSize: '24px', marginRight: '10px' }}>37%</span>
    <div style={{ width: '1px', height: '70px', backgroundColor: '#A4A4A5', margin: '0 20px' }}></div>
    <span style={{ fontSize: '16px' }}>-10% que ayer</span>
  </div>
</div>

<div className="card graph-card" style={{ backgroundColor: '#373840', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
  <div style={{ color: '#DCDCDD', textAlign: 'center', paddingTop: '10px' }}>
    Horarios con<br />más actividad
  </div>
  <BarChart
    width={300}
    height={200}
    data={barData}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="uv" fill="#EF9575" />
  </BarChart>
</div>


</div>
    </main>
  );
}

export default Home;






