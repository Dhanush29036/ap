
import { Card } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

const PaymentsPage = () => {
  const cards = [
    { id: 1, type: "Visa", last4: "4242", expiry: "12/25" },
    { id: 2, type: "Mastercard", last4: "8888", expiry: "09/24" },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <div className="space-y-3">
        {cards.map((card) => (
          <Card key={card.id} className="p-4">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-8 h-8 text-gray-600" />
              <div>
                <p className="font-medium">{card.type} ending in {card.last4}</p>
                <p className="text-sm text-gray-500">Expires {card.expiry}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PaymentsPage
