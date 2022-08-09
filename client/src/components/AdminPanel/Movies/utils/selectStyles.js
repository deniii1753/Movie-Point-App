export const selectStyles = {
    container: (provided) => ({
        ...provided,
        width: '100%',
    }),
    control: (provided) => ({
        ...provided,
        color: '#969494',
        border: '1px solid #d5dee6',
        borderLeft: 'none',
        borderTopRightRadius: '1.25rem',
        borderBottomRightRadius: '1.25rem',
        backgroundColor: '#f7f7f7',
        "&:hover": {
            borderColor: "none",
            cursor: "pointer"
        },
    }),
    input: (provided) => ({
        ...provided,
        color: '#969494'
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        fontSize: '',
    })
}