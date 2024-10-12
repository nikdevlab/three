import {createFetch} from "@vueuse/core";
import {ref, computed} from 'vue';

const BASE_URL = 'https://www.klerk.ru/yindex.php/v3/';

const useHttp = createFetch({
    baseUrl: BASE_URL
});

const useGetRubrics = (allowEmpty) => {
    const query = ref(allowEmpty ? '?allowEmpty=1' : '');
    const url = computed(() => `event/rubrics${query}`);

    return useHttp(url, {
        refetch: true,
        onFetchError(ctx) {
            if (ctx.response.ok) {
                ctx.error = false
            } else {
                ctx.error = new Error('Error fetch leads')
            }
            return ctx
        }
    }).json();
};

export {
  useGetRubrics,
};
