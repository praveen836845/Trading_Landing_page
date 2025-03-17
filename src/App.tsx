import { ArrowRight, Wallet, BarChart2, Database, Shield, Gavel, Coins, Settings } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
      <Icon className="w-8 h-8 text-purple-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function App() {
  const handlePortalAccess = () => {
    window.location.href = "https://tradingagent.vercel.app/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-6">
            ByteTrader
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your comprehensive portal to the Injective Chain ecosystem. Execute trades, manage assets, and navigate the decentralized future with confidence.
            </p>
            <button
              onClick={handlePortalAccess}
              className="group bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Access Trading Portal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Wallet}
            title="Transfers & Transactions"
            description="Seamlessly transfer funds between subaccounts and execute cross-chain transactions with Ethereum."
          />
          <FeatureCard
            icon={BarChart2}
            title="Advanced Trading"
            description="Place sophisticated orders in spot and derivatives markets with real-time order book data."
          />
          <FeatureCard
            icon={Database}
            title="Account Management"
            description="Monitor balances, manage stakes, and handle token operations efficiently."
          />
          <FeatureCard
            icon={Shield}
            title="Security & Permissions"
            description="Granular control over authorizations and delegated trading permissions."
          />
          <FeatureCard
            icon={Gavel}
            title="Auction Participation"
            description="Engage in burn auctions and track historical auction performance."
          />
          <FeatureCard
            icon={Coins}
            title="Token Operations"
            description="Create, mint, and manage tokens with full metadata control."
          />
        </div>
      </div>

      {/* Network Selection */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
          <Settings className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-4">Flexible Network Configuration</h3>
          <p className="text-gray-300 mb-6">
            Switch seamlessly between testnet and mainnet environments to suit your trading needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;