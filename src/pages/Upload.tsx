import { useState, useCallback } from "react";
import { Upload as UploadIcon, FileCheck, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useDropzone } from "react-dropzone";

interface AnalysisResult {
  rows: number;
  columns: number;
  prediction: string;
  type?: string;
}

const Upload = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    
    if (!selectedFile) return;

    // Validate file type
    if (!selectedFile.name.endsWith('.csv')) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a CSV file",
      });
      return;
    }

    // Validate file size (300MB = 314572800 bytes)
    if (selectedFile.size > 314572800) {
      toast({
        variant: "destructive",
        title: "File too large",
        description: "Maximum file size is 300MB",
      });
      return;
    }

    setFile(selectedFile);
    setResult(null);
    toast({
      title: "File uploaded",
      description: `${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)}MB)`,
    });
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
    maxFiles: 1,
  });

  const analyzeFile = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    
    try {
      const formData = new FormData();
      formData.append('file', file);

      // TODO: Replace with actual backend endpoint
      // Simulated analysis for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResult: AnalysisResult = {
        rows: Math.floor(Math.random() * 10000) + 1000,
        columns: Math.floor(Math.random() * 20) + 5,
        prediction: Math.random() > 0.5 ? "DDoS Attack Detected" : "Benign Traffic",
        type: Math.random() > 0.5 ? "SYN Flood" : "UDP Flood",
      };

      setResult(mockResult);
      
      toast({
        title: "Analysis complete",
        description: "Your dataset has been analyzed successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Analysis failed",
        description: "An error occurred while analyzing your file",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upload Your <span className="text-primary">Dataset</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Drag & drop your CSV file or click to browse (max 300 MB)
          </p>
        </div>

        {/* Upload Area */}
        <div className="glass-card p-8 glow-border mb-8 animate-fade-in">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
              isDragActive
                ? "border-primary bg-primary/10"
                : "border-primary/30 hover:border-primary/50"
            }`}
          >
            <input {...getInputProps()} />
            <UploadIcon className="w-16 h-16 text-primary mx-auto mb-4" />
            {file ? (
              <div className="space-y-2">
                <FileCheck className="w-12 h-12 text-primary mx-auto" />
                <p className="text-lg font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ) : (
              <div>
                <p className="text-lg mb-2">
                  {isDragActive
                    ? "Drop the file here"
                    : "Drag & drop your CSV file here, or click to select"}
                </p>
                <p className="text-sm text-muted-foreground">CSV files up to 300MB</p>
              </div>
            )}
          </div>

          {file && !result && (
            <div className="mt-6 text-center">
              <Button
                onClick={analyzeFile}
                disabled={isAnalyzing}
                className="btn-glow"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Now"
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="glass-card p-8 glow-border animate-fade-in space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Analysis Results</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-4 border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Total Rows</p>
                <p className="text-3xl font-bold text-primary">{result.rows.toLocaleString()}</p>
              </div>
              <div className="glass-card p-4 border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Total Columns</p>
                <p className="text-3xl font-bold text-primary">{result.columns}</p>
              </div>
            </div>

            <div className="glass-card p-6 border-primary/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Prediction</p>
                  <p className="text-2xl font-bold mb-2">{result.prediction}</p>
                  {result.type && (
                    <p className="text-muted-foreground">
                      Attack Type: <span className="text-primary font-medium">{result.type}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                setFile(null);
                setResult(null);
              }}
              variant="outline"
              className="w-full"
            >
              Analyze Another File
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
