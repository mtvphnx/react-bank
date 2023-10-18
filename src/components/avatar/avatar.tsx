interface AvatarProps {
  src: string,
  alt: string
}

export const Avatar = ({src, alt} : AvatarProps) => {
  return <img src={src} alt={alt}/>
}