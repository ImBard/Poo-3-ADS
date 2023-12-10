import { Component } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ProfileImageProps {
  image: string;

}

class ProfileImage extends Component<ProfileImageProps> {
  render() {
    return (
      <Avatar>
        <AvatarImage src={this.props.image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  }
}

export default ProfileImage;