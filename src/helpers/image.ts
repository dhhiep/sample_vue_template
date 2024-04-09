import { isPresent } from '@/utils/lang';

export const getImageUrl = (url: string) => {
  return new URL(`/src/assets/${url}`, import.meta.url).href;
};

export const getBackgroundImage = (imageSignedUrl: string) => {
  if (isPresent(imageSignedUrl)) return `url(${imageSignedUrl})`;

  return `url(${getImageUrl('images/default/blank_image.svg')})`;
};
