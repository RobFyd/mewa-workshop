'use client';

import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

import { Button, Input } from "@ems/common-ui";

import { createReview } from "./actions";
import { CreateReviewDto, createReviewSchema } from "../types";

export const CreateForm = () => {
    const [isError, setIsError] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateReviewDto>({
        resolver: zodResolver(createReviewSchema),
    });

    const clientAction: SubmitHandler<CreateReviewDto> = async (data) => {
        const serverResult = await createReview(data);
        console.log({ serverResult });
        if (serverResult.status === 'error') {
            setIsError(true);
        }
    };

    return (
        <>
            {isError && <p>Oh no server error!</p>}
            <form onSubmit={handleSubmit(clientAction)}>
                <Input {...register('content')} label="Content" error={errors.content} />
                <Input {...register('author')} label="Author" error={errors.author} />
                <Input {...register('points')} label="Points" error={errors.points} />
                <Button label="Submit" type="submit" />
            </form>
        </>
    );
};

