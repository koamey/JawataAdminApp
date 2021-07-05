
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe(
    { name: 'htmlToPlaintext' }
)

export class HtmlToPlaintextPipe implements PipeTransform {

    // transform(text: string): string {
    //     console.log("text is:-" + text);
    //     return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    // }

    constructor(private sanitizer: DomSanitizer) { }
    
    transform(value: any): any {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

}