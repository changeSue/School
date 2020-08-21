import fetch from '@/utils/fetch'

export function fetchList() {
  return fetch({
    url: "'/article/' + '4' + '/1'",
    method: "get",
  });
}


