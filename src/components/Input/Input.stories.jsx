import { Input } from "./Input";

export default {
    title:"Design System/Atoms/Input",
    component:Input
}

export const Small = () => <Input type='text' size='small' style='h-8' placeholder="Small size" />

export const Medium = () => <Input type='password' size='medium' style='h-10'placeholder="Medium size" />

export const Large = {
    render : () => <Input type='text' size='large' style='h-12' placeholder="Large size"/>
}