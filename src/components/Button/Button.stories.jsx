import { Button } from "./Button"

export default {
    title:"Design System/Atoms/Button",
    component:Button
}

export const Primary = () => <Button variant='bg-primary'>Primary</Button>

export const Secondary = () => <Button variant='bg-secondary' color='text-black'>Secondary</Button>

//otherwise
export const Success = {
    render : () => <Button variant='bg-success'>Success</Button>
}

export const Danger = {
    render : () => <Button variant='bg-danger'>Danger</Button>
}
