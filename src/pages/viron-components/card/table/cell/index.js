import clipboard from 'clipboard-js';
import contains from 'mout/array/contains';
import isArray from 'mout/lang/isArray';
import isBoolean from 'mout/lang/isBoolean';
import isNull from 'mout/lang/isNull';
import isNumber from 'mout/lang/isNumber';
import isObject from 'mout/lang/isObject';
import isString from 'mout/lang/isString';
import isUndefined from 'mout/lang/isUndefined';

export default function() {
  const store = this.riotx.get();

  // クリップっボードコピーをサポートしているか否か。
  let isClipboardCopySupported = true;
  // モバイル用レイアウトか否か。
  this.isMobile = store.getter('layout.isMobile');
  // テキスト系か否か。
  this.isText = false;
  // 画像系か否か。
  this.isImage = false;
  // base64系か否か。
  this.isBase64 = false;
  this.mimeType = null;
  // 動画系か否か。
  this.isVideo = false;
  this.videoType = null;
  // typeに応じて表示を切り替えます。
  this.value = (() => {
    const data = this.opts.data;
    const column = this.opts.column;
    if (isNull(data)) {
      this.isText = true;
      return 'null';
    }
    if (isBoolean(data)) {
      this.isText = true;
      return (data ? 'true' : 'false');
    }
    if (isNumber(data)) {
      this.isText = true;
      return String(data);
    }
    if (isArray(data)) {
      this.isText = true;
      return '[...]';
    }
    if (isObject(data)) {
      this.isText = true;
      return '{...}';
    }
    if (isString(data)) {
      if (column.format === 'base64') {
        this.isBase64 = true;
        // MIME-type設定。指定無しであればpng画像とする。
        this.mimeType = column['x-mime-type'] || 'image/png';
        switch (this.mimeType) {
        case 'image/png':
        case 'image/gif':
        case 'image/jpeg':
          this.isImage = true;
          break;
        default:
          break;
        }
        return data;
      }
      // 拡張子から最適な表示方法を推測します。
      const split = data.split('.');
      if (split.length < 2) {
        // 拡張子がなければそのまま表示する。
        this.isText = true;
        return data;
      }
      const suffix = split[split.length - 1];
      // 画像系チェック。
      if (contains(['png', 'jpg', 'gif'], suffix)) {
        this.isImage = true;
        return data;
      }
      // 動画系チェック。
      if (contains(['mp4', 'ogv', 'webm'], suffix)) {
        this.isVideo = true;
        this.videoType = suffix;
        return data;
      }
      // 推測できない場合はそのまま表示。
      this.isText = true;
      return data;
    }
    if (isUndefined(data)) {
      this.isText = true;
      return '';
    }
    // それ以外。強制的に文字列化。
    this.isText = true;
    return String(data);
  })();

  this.listen('layout', () => {
    this.isMobile = store.getter('layout.isMobile');
  });

  this.handleStringTap = e => {
    if (this.isMobile || !isClipboardCopySupported) {
      return;
    }
    e.stopPropagation();
    Promise
      .resolve()
      .then(() => {
        return clipboard.copy(this.value);
      })
      .then(() => store.action('toasts.add', {
        message: 'クリップボードへコピーしました。'
      }))
      .catch(() => {
        isClipboardCopySupported = false;
        store.action('toasts.add', {
          type: 'error',
          message: 'ご使用中のブラウザではクリップボードへコピー出来ませんでした。'
        });
      });
  };
}
