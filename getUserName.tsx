import { UserInfoProps } from "./userInfo";

const getUserName = (userInfo: UserInfoProps) => {
    return userInfo?.name;
}