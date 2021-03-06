/**
 * You need to edit all lang files!!
 * Naming Rule:
 * [category].[sub category].[optional].[optional]
 * category:
 *   - `vrn` for `viron`.
 *   - `cmp` for `component`.
 *   - `core` for `core`.
 *   - `pg` for `pages`.
 *   - `st` for `store`.
 * sub category:
 *   - Use `riot tag name` when category is one of type of `cmp` or `page`.
 */
export default {
  'st.mutations.manage': '관리화면',
  'st.mutations.dashboard': '대시보드',
  'vrn.poster.home': '홈',
  'vrn.header.menu.entry': '추가',
  'vrn.header.menu.entry.title': '관리화면 추가',
  'vrn.header.menu.entry.button': '추가',
  'vrn.header.menu.entry.placeholder': 'URL주소입력',
  'vrn.header.menu.entry.error_url': 'URL주소가 잘못되었습니다.',
  'vrn.header.menu.entry.error_overlapping': '이미 존재하는 엔드포인트입니다',
  'vrn.header.menu.entry.info': '엔드포인트를 추가하였습니다.',
  'vrn.header.menu.entry.error_notfound': '엔드포인트를 찾을 수 없습니다.',
  'vrn.header.menu.entry.error': '엔드포인트를 추가할 수 없습니다.',
  'vrn.header.menu.export': '홈 저장',
  'vrn.header.menu.export.title': '홈 저장',
  'vrn.header.menu.export.description': '홈의 엔드포인트목록을 json 파일로 내보냅니다.',
  'vrn.header.menu.export.button': '저장하기',
  'vrn.header.menu.export.info': '엔드포인트목록을 내보냈습니다',
  'vrn.header.menu.import': '홈 읽기',
  'vrn.header.menu.import.title': '홈 읽기',
  'vrn.header.menu.import.description': '엔드포인트목록을 홈에 반영합니다',
  'vrn.header.menu.import.button': '읽기',
  'vrn.header.menu.import.error_json_type': 'JSON형식의 파일을 선택하여 주십시오',
  'vrn.header.menu.import.error_file_read': '파일 읽기에 실패하였습니다',
  'vrn.header.menu.import.error_endpoint_read': '엔드포인트목록 읽기가 완료되었습니다',
  'vrn.header.menu.clear': '모든 카드 삭제',
  'vrn.header.menu.clear.title': '모든 카드 삭제',
  'vrn.header.menu.clear.description': '홈의 엔드포인트목록을 모두 삭제합니다. 이 작업은 취소 할 수 없습니다.',
  'vrn.header.menu.clear.button': '삭제하기',
  'vrn.header.menu.clear.info': '엔드포인트목록을 삭제하였습니다',
  'vrn.header.menu.help': '도움말',
  'vrn.header.filter.placeholder': '카드 검색',
  'vrn.header.filter.autocomplete.emprty': '후보 없음',
  'vrn.header.filter.autocomplete.card': '카드',
  'vrn.header.filter.autocomplete.tag': '태그',
  'pg.endpoints.add': '추가',
  'pg.endpoints.endpoint.menu.qrcode.title': 'QR코드',
  'pg.endpoints.endpoint.menu.qrcode.qrcode_info1': '모바일 단말기에 엔드포인트를 추가할 수 있습니다.',
  'pg.endpoints.endpoint.menu.qrcode.qrcode_info2': '사용하는 QR코드리더로 스캔하십시오.',
  'pg.endpoints.endpoint.menu.endpoint_delete': '엔드포인트 삭제',
  'pg.endpoints.endpoint.menu.endpoint_delete_info': '엔드포인트를 삭제하였습니다.',
  'pg.endpoints.endpoint.menu.logout': '로그아웃',
  'pg.endpoints.endpoint.menu.logout_info': '로그아웃이 완료되었습니다.',
  'pg.endpoints.endpoint.signin.email.login_error': '로그인할 수 없습니다.계정에 등록된 이메일 주소와 비밀번호를 사용하여 주십시오. 사용한 이메일 주소가 관리자로 등록되어 있는지 확인하여 주십시오.',
  'pg.endpoints.endpoint.description': '로그인으로 관리화면 정보를 얻을 수 있습니다',
  'pg.endpoints.endpoint.signin.label': '또는',
  'pg.endpoints.endpoint.signin.oauth_message1': '또는 이쪽을',
  'pg.endpoints.endpoint.signin.oauth_message2': '이용하여 로그인',
  'pg.endpoints.endpoint.signin.email.mail_placeholder': '아이디 또는 이메일 주소',
  'pg.endpoints.endpoint.signin.email.password_placeholder': '비밀번호',
  'pg.endpoints.endpoint.signin.email.login_label': '로그인',
  'pg.components.card.chart.error_401': '인증 에러',
  'pg.components.card.chart.error_403': 'access forbidden error',
  'pg.components.card.chart.error_network': '통신에 실패하였습니다.',
  'pg.components.card.number.error_401': '인증 에러',
  'pg.components.card.number.error_network': '통신에 실패하였습니다.',
  'pg.components.card.number.error_response': '응답 데이터에 오류가 있습니다.',
  'pg.components.card.number.error_number': 'value 값이 숫자가 아닙니다.',
  'pg.components.card.table.error_401': '인증 에러',
  'pg.components.card.table.error_403': 'access forbidden error',
  'pg.components.card.table.error_network': '통신에 실패하였습니다.',
  'pg.components.card.table.error_response_array': '응답 데이터가 배열이 아닙니다.',
  'pg.components.card.table.error_empty': '0개 있습니다',
  'pg.components.card.table.error_object': '행 데이터 개체가 없습니다.',
  'pg.components.card.unsupported': '구성 요소 유형 "{{style}}"는 현재 지원되지 않습니다.',
  'pg.components.filter.title': '표시 항목 필터',
  'pg.components.filter.description': '테이블에 표시 할 항목을 선택할 수 있습니다. 표시 할 항목을 ON으로 하십시오.',
  'pg.components.filter.label': '모두 선택',
  'pg.components.filter.button': '적용',
  'pg.components.operation.label_get': '취득하기',
  'pg.components.operation.label_get_info': '취득했습니다.',
  'pg.components.operation.label_post': '신규작성',
  'pg.components.operation.label_post_info': '신규작성하였습니다.',
  'pg.components.operation.label_put': '저장',
  'pg.components.operation.label_put_info': '저장했습니다.',
  'pg.components.operation.label_delete': '삭제하기',
  'pg.components.operation.label_delete_info': '삭제했습니다.',
  'pg.components.operation.label_default': '실행',
  'pg.components.operation.label_default_info': '완료했습니다.',
  'pg.components.operation.error_auth': '인증 없음',
  'pg.components.operation.comfirm': '정말 실행 하시겠습니까?',
  'pg.components.operation.cancel': '취소',
  'pg.components.preview': '미리보기',
  'pg.components.search.title': '검색',
  'pg.components.search.description': '쿼리 매개 변수를 지정하십시오.',
  'pg.components.search.button': '검색하기',
  'pg.components.error_auth_title': '인증 없음',
  'pg.components.error_auth_message': '인증이 만료되었습니다. 다시 로그인 해주십시오.',
  'pg.endpointimport.error_overlapping': '이미 엔드 포인트 ({url})이 존재합니다.',
  'pg.endpointimport.title': '엔드 포인트 추가',
  'pg.endpointimport.message': '엔드 포인트 ({url})가 목록에 추가되었습니다.',
  'pg.endpointimport.error_add': '엔드 포인트 추가 실패',
  'pg.endpointimport.error_add_message': '엔드 포인트 ({url})를 추가 할 수 없습니다.',
  'pg.oauthredirect.error_title': '인증 실패',
  'pg.oauthredirect.error_message': 'OAuth 인증에 실패했습니다. 등록된 계정으로 다시 시도해주십시오. 전체 오류 원인에 대해서는 관리자에게 문의하십시오.',
  'core.fetch.error_network_timeout': '시간이 너무 오래 소요되어 통신을 중단했습니다.',
  'cmp.parameters.multiple_of': '{{multipleOf}}로 나누어 떨어지는 수치로 하십시오.',
  'cmp.parameters.maximum1': '{{maximum}}보다 작은 수치로 하십시오.',
  'cmp.parameters.maximum2': '{{maximum}} 이하의 수치로 하십시오.',
  'cmp.parameters.minimum1': '{{minimum}}보다 큰 수치로 하십시오.',
  'cmp.parameters.minimum2': '{{minimum}} 이상의 수치로 하십시오.',
  'cmp.parameters.max_length': '문자수를 {{maxLength}} 이하로 하십시오.',
  'cmp.parameters.min_length': '문자수를 {{minLength}} 이상으로하십시오.',
  'cmp.parameters.pattern': '{{pattern}}에 매치시켜주세요',
  'cmp.parameters.additional_items': '요소 수를 {{length}} 이하로 하십시오.',
  'cmp.parameters.max_items': '요소 수를 {{maxItems}} 이하로 하십시오.',
  'cmp.parameters.min_items': '요소 수를 {{minItems}} 이상으로 하십시오.',
  'cmp.parameters.unique_items': '내용이 중복되지 않는 요소로 구성하십시오.',
  'cmp.parameters.max_properties': '요소 수를 {{maxProperties}} 이하로 하십시오.',
  'cmp.parameters.min_properties': '요소 수를 {{minProperties}} 이상으로 하십시오.',
  'cmp.parameters.required': '요소에 {{key}} {{description}}을(를) 포함하십시오.',
  'cmp.parameters.enum': '{{enum}} 중 하나를 설정하십시오.',
  'cmp.parameters.type': '형태를 {{types}} 중 하나로 하십시오.',
  'cmp.parameters.format_date_time': 'date-time에 맞는 형식으로 입력하십시오.',
  'cmp.parameters.format_date_time_notfound': '존재하는 날짜를 입력하십시오.',
  'cmp.parameters.format_email': 'email에 맞는 형식으로 입력하십시오.',
  'cmp.parameters.format_hostname': 'hostname은 255 자 이내로 입력하십시오.',
  'cmp.parameters.format_hostname_notmatch': 'hostname에 맞는 형식으로 입력하십시오.',
  'cmp.parameters.format_ipv4': 'ipv4에 맞는 형식으로 입력하십시오.',
  'cmp.parameters.format_ipv6': 'ipv6에 맞는 형식으로 입력하십시오.',
  'cmp.parameters.format_uri': 'uri에 맞는 형식으로 입력하십시오.',
  'cmp.parameters.error_undefined': '필수 항목입니다.',
  'cmp.parameters.form.required_label': '(필수)',
  'cmp.parameters.items.button': '항목을 모두 열기',
  'cmp.parameters.items.button_remove': '이 항목을 삭제',
  'cmp.parameters.properties.label': '선택하세요',
  'cmp.autocomplete.copy': '클립 보드에 복사했습니다.',
  'cmp.autocomplete.error_copy': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다.',
  'cmp.dialog.ok': 'OK',
  'cmp.dialog.cancel': '취소',
  'cmp.explorer.droparea_title': '이미지 업로드',
  'cmp.explorer.droparea_info': '여기에 파일을 끌어다 놓으면 추가 할 수 있습니다',
  'cmp.explorer.droparea_label': '라이브러리',
  'cmp.explorer.droparea_button': '파일을 선택',
  'cmp.explorer.error_401': '인증 오류.',
  'cmp.explorer.error_network': '통신에 실패했습니다.',
  'cmp.explorer.image_add_info': '이미지를 추가했습니다.',
  'cmp.explorer.error_401_auth': '인증 없음',
  'cmp.explorer.image_delete_info': '이미지를 삭제했습니다.',
  'cmp.explorer.delete_info_title': '이미지를 완전히 삭제 하시겠습니까?',
  'cmp.explorer.delete_info_message': '이미지를 삭제 한 후 원래대로 되돌릴 수 없습니다. 이 이미지를 완전히 삭제 하시겠습니까?',
  'cmp.explorer.detail.title': '삭제',
  'cmp.explorer.detail.info': '이 이미지의 주소',
  'cmp.explorer.detail.button': '이 이미지를 삽입',
  'cmp.explorer.detail.copy_message': '클립 보드에 복사했습니다.',
  'cmp.explorer.detail.error_copy_message': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다',
  'cmp.html.copy_edit': '에디터',
  'cmp.html.copy_preview': '미리보기',
  'cmp.html.copy_message': '클립 보드에 복사했습니다.',
  'cmp.html.error_copy_message': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다',
  'cmp.list.back': '돌아 가기',
  'cmp.list.view': '더보기',
  'cmp.numberinput.copy_message': '클립 보드에 복사했습니다.',
  'cmp.numberinput.error_copy_message': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다',
  'cmp.pug.copy_message': '클립 보드에 복사했습니다.',
  'cmp.pug.copy_error_copy_message': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다',
  'cmp.pug.editor_label': '에디터',
  'cmp.pug.preview_label': '미리보기',
  'cmp.select.copy_message': '클립 보드에 복사했습니다.',
  'cmp.select.copy_error_copy_message': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다',
  'cmp.textarea.copy_message': '클립 보드에 복사했습니다.',
  'cmp.textarea.copy_error_copy_message': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다',
  'cmp.textinput.copy_message': '클립 보드에 복사했습니다.',
  'cmp.textinput.copy_error_copy_message': '사용중인 브라우저에서 클립 보드에 복사 할 수 없습니다',
  'cmp.wyswyg.explorer_title': '이미지 업로드',
};
