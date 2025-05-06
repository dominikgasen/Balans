import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const pages = [
  { name: 'Dashboard', path: '/' },
  { name: 'Transactions', path: '/transactions' },
  { name: 'Budgets', path: '/budgets' },
  { name: 'Planner', path: '/planner' },
  { name: 'Debts', path: '/debts' }
];

const Sidebar = () => (
  <div className="w-64 h-screen bg-white border-r p-4 flex flex-col">
    <h1 className="text-2xl font-bold mb-8">Balans</h1>
    {pages.map(page => (
      <Link key={page.name} to={page.path} className="mb-4 text-gray-700 hover:text-blue-600">
        {page.name}
      </Link>
    ))}
  </div>
);

const Page = ({ title }: { title: string }) => (
  <div className="p-8">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-500 mt-2">This is the {title.toLowerCase()} page. Content coming soon!</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Page title="Dashboard" />} />
            <Route path="/transactions" element={<Page title="Transactions" />} />
            <Route path="/budgets" element={<Page title="Budgets" />} />
            <Route path="/planner" element={<Page title="Planner" />} />
            <Route path="/debts" element={<Page title="Debts" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
