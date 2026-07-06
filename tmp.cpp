#include <QString>

#include <dcmtk/dcmdata/dctk.h>
#include <dcmtk/dcmdata/dcdeftag.h>

struct DicomMetaData
{
    QString patientName;
    QString patientID;
    QString patientBirthDate;

    QString studyDescription;
    QString seriesDescription;

    QString institutionName;
    QString manufacturerModelName;

    QString acquisitionDate;
    QString acquisitionTime;

    QString sliceThickness;
    QString sliceLocation;

    QString modality;
    QString seriesNumber;
    QString instanceNumber;
};

static QString readTag(DcmDataset *dataset, const DcmTagKey &tag)
{
    if (dataset == nullptr)
        return "-";

    OFString value;

    // 문자열 태그를 읽음
    OFCondition status = dataset->findAndGetOFStringArray(tag, value);

    if (status.good())
        return QString::fromLocal8Bit(value.c_str()).trimmed();

    return "-";
}

DicomMetaData readDicomMetaData(const QString &filePath)
{
    DicomMetaData meta;

    DcmFileFormat fileFormat;

    OFCondition status =
        fileFormat.loadFile(filePath.toLocal8Bit().constData());

    if (status.bad())
        return meta;

    DcmDataset *dataset = fileFormat.getDataset();

    meta.patientName =
        readTag(dataset, DCM_PatientName);

    meta.patientID =
        readTag(dataset, DCM_PatientID);

    meta.patientBirthDate =
        readTag(dataset, DCM_PatientBirthDate);

    meta.studyDescription =
        readTag(dataset, DCM_StudyDescription);

    meta.seriesDescription =
        readTag(dataset, DCM_SeriesDescription);

    meta.institutionName =
        readTag(dataset, DCM_InstitutionName);

    meta.manufacturerModelName =
        readTag(dataset, DCM_ManufacturerModelName);

    meta.acquisitionDate =
        readTag(dataset, DCM_AcquisitionDate);

    meta.acquisitionTime =
        readTag(dataset, DCM_AcquisitionTime);

    meta.sliceThickness =
        readTag(dataset, DCM_SliceThickness);

    meta.sliceLocation =
        readTag(dataset, DCM_SliceLocation);

    meta.modality =
        readTag(dataset, DCM_Modality);

    meta.seriesNumber =
        readTag(dataset, DCM_SeriesNumber);

    meta.instanceNumber =
        readTag(dataset, DCM_InstanceNumber);

    return meta;
}