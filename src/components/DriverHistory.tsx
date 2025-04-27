const DriverHistory = () => {
    const rides = [
      { date: '2024-04-01', from: 'Central Park', to: 'Downtown', fare: '$15', rating: '4.8' },
      { date: '2024-03-28', from: 'Tech Park', to: 'Airport', fare: '$25', rating: '5.0' },
    ];
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Ride History</h1>
        <div className="space-y-4">
          {rides.map((ride, index) => (
            <div key={index} className="space-y-2">
              <p><strong>Date:</strong> {ride.date}</p>
              <p><strong>From:</strong> {ride.from}</p>
              <p><strong>To:</strong> {ride.to}</p>
              <p><strong>Fare:</strong> {ride.fare}</p>
              <p><strong>Rating:</strong> {ride.rating}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DriverHistory;
  