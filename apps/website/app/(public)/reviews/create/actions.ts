'use server';

import { CreateReviewDto, createReviewSchema } from '../types';

export const createReview = async (formData: FormData) => {
  'use server';

  const review: CreateReviewDto = {
    content: formData.get('content') as string,
    author: formData.get('author') as string,
    points: parseInt(formData.get('points') as string),
    // points: formData.get('points') as string,
  };

  const result = createReviewSchema.safeParse(review);
  if (!result.success) {
    console.log(result.error.issues);

    return {
      status: 'error',
    };
  } else {
    return {
      status: 'success',
      payload: review,
    };
  }
};
