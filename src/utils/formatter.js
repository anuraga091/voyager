import { formatDistanceToNow } from 'date-fns';


export const formatString = (str) => {
  if (str.length <= 10) {
    return str;
  }
  return `${str.substring(0, 6)}...${str.substring(str.length - 3)}`;
};


export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true }).replace(/^about /, '');
}