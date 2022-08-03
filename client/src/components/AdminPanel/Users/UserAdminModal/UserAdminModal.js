export function UserAdminModal({closeHandler, user}) {
    console.log(user);
    return (
        <button onClick={(closeHandler)} >close</button>
    )
}