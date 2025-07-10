import { useAuth } from '../context/AuthContext'
import { LogOut } from 'lucide-react'

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={signOut}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </header>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user?.email}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium">Your Stats</h3>
              <p className="text-gray-600">Coming soon</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium">Recent Activity</h3>
              <p className="text-gray-600">Coming soon</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium">Quick Actions</h3>
              <p className="text-gray-600">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
