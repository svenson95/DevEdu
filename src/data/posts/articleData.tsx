import {Article} from "../../types/Article";
import {lf1_posts} from "./lf-1";
import {lf2_posts} from "./lf-2";
import {lf3_posts} from "./lf-3";

export const articleData: Article[] = [
    ...lf1_posts, ...lf2_posts, ...lf3_posts
];
