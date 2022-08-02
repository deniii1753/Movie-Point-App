const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getDate(date) {
    
    const newDate = new Date(date);
    
    const day = newDate.getUTCDate() < 10 ? `0${newDate.getUTCDate()}` : newDate.getUTCDate();
    const month = monthNames[newDate.getUTCMonth()];
    const year = newDate.getUTCFullYear();

    return `${day}, ${month}, ${year}`;
}