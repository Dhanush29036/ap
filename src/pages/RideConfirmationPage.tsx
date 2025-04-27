import MapComponent from "@/components/MapComponent";

const RideConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-women-purple">Ride Booked Successfully!</h1>
      <div className="w-full max-w-4xl h-[500px]">
        <MapComponent />
      </div>
    </div>
  );
};

export default RideConfirmationPage;
