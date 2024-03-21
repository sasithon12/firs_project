const members = [
    { name: "a", money: "500" },
    { name: "b", money: "400" },
    { name: "c", money: "5200" },
    { name: "d", money: "1200" },
];

const result = members.filter((member) => {
    return parseInt(member.money) > 1000; 
});

const result1 = result.map((member) => {
    return member.name;
});

console.log(result1);
