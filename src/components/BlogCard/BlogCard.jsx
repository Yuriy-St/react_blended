import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date as DateEl,
} from './BlogCard.styled';

export const BlogCard = ({
  id,
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => (
  <Card data-id={id}>
    <CardHeader>
      <CardPoster src={poster} alt={tag} />
    </CardHeader>
    <CardBody>
      <Tag>{tag}</Tag>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </CardBody>
    <CardFooter>
      <UserBox>
        <Avatar src={avatar} alt={userName} />
        <UserInfo>
          <UserName>{userName}</UserName>
          <DateEl>{formatDistanceToNow(new Date(postedAt))}</DateEl>
        </UserInfo>
      </UserBox>
    </CardFooter>
  </Card>
);

BlogCard.propTypes = {
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
};
