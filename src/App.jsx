import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Settings from './Settings';
import './Appp.css';

export default function App() {
  return (
    <div className="app-layout dark">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Dashboard />
          <Analytics />
          <Settings />
        </main>
      </div>
    </div>
  );
}