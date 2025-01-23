let allProperties = [
    {
        propertyId: 1,
        propertyName: "Apartment",
        propertyOwner: "James",
        propertyLocation: "Kochi",
        propertyCost: 1000000,
        propertyImageUrl: "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww"
    },
    {
        propertyId: 2,
        propertyName: "Building",
        propertyOwner: "John",
        propertyLocation: "Trivandrum",
        propertyCost: 2000000,
        propertyImageUrl: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
    },
    {
        propertyId: 3,
        propertyName: "House",
        propertyOwner: "Jacob",
        propertyLocation: "Kottayam",
        propertyCost: 3000000,
        propertyImageUrl: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D"
    }
]

export function getAllProperties(){
    return allProperties;
}


export function updateProperty(editProperty){
    let index=allProperties.findIndex((property)=>property.propertyId==propertyId);
    allProperties[index]=editProperty;
}

export function deleteProperty(propertyId){
    allProperties=allProperties.filter((property)=>property.propertyId!=propertyId);
}