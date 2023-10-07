export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// const filteredImages = data.images.filter(image => {
//     const distance = calculateDistance(
//         parseFloat(myLocation.latitude),
//         parseFloat(myLocation.longitude),
//         parseFloat(image.location.latitude),
//         parseFloat(image.location.longitude)
//     );
//     const maxDistanceInKm = 10; // Define the maximum distance in kilometers
//     return distance <= maxDistanceInKm;
// });