import { useQuery } from "./vue/useQuery";
import { useMutation } from './vue/useMutation';
import { queryCache } from './core/queryCache';
import { useIsFetching } from './vue/useIsFetching';
import {VueQueryProvider} from "./vue/VueQueryProvider";
import {queryManager} from "./core/queryManager";

export { useQuery, useIsFetching, useMutation, queryCache, VueQueryProvider, queryManager };