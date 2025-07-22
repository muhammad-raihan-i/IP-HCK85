let user1={
    id:1,
    fullname:"myFullName",//string
    username:"myUserName",
    email:"myEmail@domain.com",
    password:"myPassword",
    phoneNumber:"089912345678",
    birthdate:"1999-09-09",
    job:"myJob",
    role:"landlord",//landlord atau tenant atau admin
    profileImgUrl:"myCloudinaryLink"
}

let room1={
    id:1234,
    dormAddress:"",
    dormLat:-6.239490,
    dormLong:106.913217,
    roomNumber:"3A",
    roomSize:20,
    isVacant:true,
    UserLandlordId:1
}
let session1={
    id:1,
    startDate:"2025-01-01",
    //business rule: checkin dianggap jam 14
    //checkout dianggap jam 12
    endDate:"2025-12-31",
    rating:0,
    UserTenantId:1
}