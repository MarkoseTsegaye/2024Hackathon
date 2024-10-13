import Button from '../Button'

const AccountView = () => {
  return (
    <div className='h-full'>
        <div className='h-1/3 place-content-end'>
        <Button title="Profile"></Button>
        <Button title="Settings"></Button>
        <Button title="Contact Us"></Button>
        <Button title="Logout"></Button>
        </div>
    </div>
  )
}

export default AccountView