
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const SettingsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <Card className="divide-y">
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Push Notifications</p>
            <p className="text-sm text-gray-500">Get notified about your rides</p>
          </div>
          <Switch />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Email Updates</p>
            <p className="text-sm text-gray-500">Receive email updates about your trips</p>
          </div>
          <Switch />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-gray-500">Toggle dark mode theme</p>
          </div>
          <Switch />
        </div>
      </Card>
    </div>
  )
}

export default SettingsPage
