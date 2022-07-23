export const multiSelectStyles = {
    control: (base) => ({
        ...base,
        backgroundColor: "#24262d",
        borderColor: "none",
        "&:hover": {
            borderColor: "none",
            cursor: "pointer"
        },
        border: 0,
        boxShadow: "none",
        disabled: true,
    }),
    option: (base) => ({
        ...base,
        color: 'black'
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: 'rgb(150, 148, 148)',
        color: 'white'
    }),
    multiValueLabel: (base) => ({
        ...base,
        color: 'white'
    }),
    input: (base) => ({
        ...base,
        color: 'rgb(150, 148, 148)'
    })
}