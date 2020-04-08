import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
declare var Stimulsoft: any;

@Component({
  selector: 'app-root',
  template: `<div> <button (click)="renderReport()">render report</button>
                  <h2>designer</h2>
                  <div id="designer"></div>
              </div>
              <div>
                  <h2>viewer</h2>
                  <div id="viewer"></div>
              </div>`,
   encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  options: any;
  designer: any;

  viewer: any = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
  report: any = new Stimulsoft.Report.StiReport();

  renderReport() {

//     this.report = new Stimulsoft.Report.StiReport();
//     // Load report from url
//     this.report.loadFile('/reports/SimpleList (2).mrt');
//     // Render report
//     this.report.renderAsync();
//     // Save rendered report to JSON string
//   const json = this.report.saveDocumentToJsonString();
// // Get report file name
// const fileName = this.report.reportAlias;
// // Save data to file
// Object.saveAs(json, fileName + ".mdc", "application/json;charset=utf-8");
  // Create the report viewer with default options
  this.viewer = new Stimulsoft.Viewer.StiViewer(null, "StiViewer", false);
  // Create a new report instance
  this.report = new Stimulsoft.Report.StiReport();
  // Load report from url
  this.report.loadFile("/reports/SimpleList (2).mrt");
  // Assign report to the viewer, the report will be built automatically after rendering the viewer
  this.viewer.report = this.report;
  this.viewer.renderHtml('viewer');
  }

  ngOnInit() {
    console.log('Loading Designer view');

    console.log('Set full screen mode for the designer');
    this.options = new Stimulsoft.Designer.StiDesignerOptions();
    this.options.appearance.fullScreenMode = false;

    console.log('Create the report designer with specified options');
    this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);

    console.log('Edit report template in the designer');
    this.designer.report = new Stimulsoft.Report.StiReport();

    console.log('Load report from url');
    this.designer.report.loadFile('/reports/SimpleList (2).mrt');

    console.log('Rendering the designer to selected element');
    this.designer.renderHtml('designer');

    console.log('Loading completed successfully!');


    this.viewer = new Stimulsoft.Viewer.StiViewer(null, "StiViewer", false);
    // Create a new report instance
    this.report = new Stimulsoft.Report.StiReport();
    // Load report from url
    this.report.loadFile("/reports/SimpleList (2).mrt");
    // Assign report to the viewer, the report will be built automatically after rendering the viewer
    this.viewer.report = this.report;
    this.viewer.renderHtml('viewer');
  }

  constructor(private http: Http) {    
  }
}
