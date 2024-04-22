// import { Button } from "./Button"
import { Btn } from "./Button"

export default {
    title:"Design System/Atoms/Button",
    component:Btn
}

// export const Primary = () => <Button variant='bg-primary'>Primary</Button>

// export const Secondary = () => <Button variant='bg-secondary' color='text-black'>Secondary</Button>

//otherwise
// export const Success = {
//     render : () => <Button variant='bg-success'>Success</Button>
// }

// export const Danger = {
//     render : () => <Button variant='bg-danger'>Danger</Button>
// }

export const Primary = {
    render:() => <Btn types="primary" label="Primary" bgColor="primary" />
}

export const Secondary = {
    render:() => <Btn types="secondary" label="Secondary" bgColor="success" />
}