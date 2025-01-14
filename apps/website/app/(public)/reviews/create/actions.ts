'use server';

import { revalidatePath } from 'next/cache';
// import { type User } from '@prisma/client';
import db from '@ems/prisma-client';
import { createReviewInAirtable } from '../services';
import { CreateReviewDto, createReviewSchema } from '../types';

export const createReview = async (review: CreateReviewDto) => {
  'use server';

  const result = createReviewSchema.safeParse(review);
  if (!result.success) {
    console.log(result.error.issues);

    return {
      status: 'error',
    };
  } else {
    //airtable
    await createReviewInAirtable(review);
    //server
    await db.user.create({
      data: review,
    });
    revalidatePath('/reviews');

    return {
      status: 'success',
      payload: review,
    };
  }
};
