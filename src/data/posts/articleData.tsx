import {Post} from "../../types/Post";
import {lf1_posts} from "./lf-1";
import {lf2_posts} from "./lf-2";
import {lf3_posts} from "./lf-3";
import {lf4_1_posts} from "./lf-4-1";
import {lf4_2_posts} from "./lf-4-2";

export const articleData: Post[] = [
    ...lf1_posts, ...lf2_posts, ...lf3_posts, ...lf4_1_posts, ...lf4_2_posts
];
