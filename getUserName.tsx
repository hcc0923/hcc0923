import { UserNameProps } from "./userInfo";

const getUserName = (userInfo: UserNameProps) => {
    return userInfo?.name;
}