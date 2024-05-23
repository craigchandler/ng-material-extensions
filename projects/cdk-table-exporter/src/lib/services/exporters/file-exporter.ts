import { Clipboard } from '@angular/cdk/clipboard';
import { inject } from '@angular/core';
import { Mime } from '../../mime';
import { Options } from '../../options';
import { FileUtil } from '../../util/file-util';
import { Exporter } from './exporter';

export abstract class FileExporter<T extends Options> implements Exporter<T> {
  private _clipboard = inject(Clipboard);
  
  constructor() {}

  public export(rows: Array<any>, options?: T) {
    if (!rows) {
      throw new Error('Empty json array is provided, rows parameter is mandatory!');
    }
    const mimeType = this.getMimeType();
    this.createContent(rows, options).then(content => {
      if (options?.clipboard) {
        this._clipboard.copy(content);
      }
      else
      {
        FileUtil.save(content, mimeType, options);
      }
    });
  }

  public abstract createContent(rows: Array<any>, options?: T): Promise<any>;
  public abstract getMimeType(): Mime;
}
