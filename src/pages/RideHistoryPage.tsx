
import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

const RideHistoryPage = () => {
  const rides = [
    { id: 1, date: "2024-04-27", from: "Home", to: "Work", amount: "$15.00" },
    { id: 2, date: "2024-04-26", from: "Work", to: "Home", amount: "$14.50" },
    { id: 3, date: "2024-04-25", from: "Home", to: "Mall", amount: "$25.00" },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ride History</h1>
      <div className="space-y-3">
        {rides.map((ride) => (
          <Card key={ride.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{ride.from} → {ride.to}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{ride.date}</span>
                </div>
              </div>
              <span className="font-semibold">{ride.amount}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default RideHistoryPage
