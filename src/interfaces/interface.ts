interface UserI {
    userId?: number;
    nickname: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface PayloadI {
    [key: string]: number | string;
    userId: number;
    nickname: string;
}

interface PostI {
    postId?: number;
    userId: number;
    title: string;
    content: string;
    likes: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface CommentI {
    commentId?: number;
    postId: number;
    userId: number;
    comment: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface LikeI {
    likeId?: number;
    postId: number;
    userId: number;
}

interface ConnOptions {
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
}


export { UserI, PayloadI, PostI, CommentI, LikeI, ConnOptions };