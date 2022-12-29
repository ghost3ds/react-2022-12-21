import {Button} from "../Button/Button";

export const Dish = ({dish}) => {
    return <div>
        {dish.name}
        <Button>-</Button>
        <Button>+</Button>
    </div>
}