import {Primary} from '../Button/Button.stories'
import { Medium } from '../Input/Input.stories'

export default {
    title:'Design system/organisms/Subscription',
}

export const PrimarySubscription = () => {
    return (
        <div className='flex flex-col gap-2'>
            <Medium />
            <Primary />
        </div>
    )
}