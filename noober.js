function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  
  console.log(ride)

  let passenger1= ride[0]
  let passenger2 = ride[1]
  let passenger3 = ride[2]

  levelOfService = ('Noober X', 'Noober Puple', 'Noober XL')

     if (ride.length > 1 || ride[0].numberOfPassengers == 1) {
    levelOfService = 'Noober Pool'
  } else if (ride.purplerequested = true) {
    levelOfService = 'Noober Purple'
  } else if (ride.numberOfPassenger > 3 ) {
    levelOfService = 'Noober XL'
  } else {levelOfService = 'Noober X'}

  console.log(levelOfService)

  passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
  passenger1Phone = ride[0].passengerDetails.phoneNumber
  passenger1NumberOfPassengers = ride[0].dropoffLocation.numberOfPassenger
  passenger1PickupAddressLine1 = ride[0].pickupLocation.address
  passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
  passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
  passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].passenger1NamedropoffLocation.zip

  passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
  passenger1Phone = ride[0].passengerDetails.phoneNumber
  passenger1NumberOfPassengers = ride[0].dropoffLocation.numberOfPassenger
  passenger1PickupAddressLine1 = ride[0].pickupLocation.address
  passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
  passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
  passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].passenger1NamedropoffLocation.zip  
  
  passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
  passenger1Phone = ride[0].passengerDetails.phoneNumber
  passenger1NumberOfPassengers = ride[0].dropoffLocation.numberOfPassenger
  passenger1PickupAddressLine1 = ride[0].pickupLocation.address
  passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
  passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
  passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].passenger1NamedropoffLocation.zip

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}