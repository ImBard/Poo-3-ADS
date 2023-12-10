import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface ProfilePictureProps {
  image: string;
  fallback: string;
}

export function ProfilePicture({ image, fallback }: ProfilePictureProps) {

  const fallbackfn = (fb: string) => {
    const split = fb.split(' ');
    return split[0][0] + split[1][0];
  }

  return (
    <Avatar>
      <AvatarImage src={image} alt="Profile picture" />
      <AvatarFallback>{fallbackfn(fallback)}</AvatarFallback>
    </Avatar>
  )
}
