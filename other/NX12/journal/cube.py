# NX 12.0.2.9
# Journal created by cadlab on Fri Dec  6 11:23:06 2019 台北標準時間

#
import math
import NXOpen
import NXOpen.Annotations
import NXOpen.Assemblies
import NXOpen.Drawings
import NXOpen.Features
import NXOpen.GeometricUtilities
import NXOpen.MenuBar
import NXOpen.Preferences
def main() : 

    theSession  = NXOpen.Session.GetSession()
    workPart = theSession.Parts.Work
    displayPart = theSession.Parts.Display
    # ----------------------------------------------
    #   Menu: Insert->Sketch...
    # ----------------------------------------------
    markId1 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    sketchInPlaceBuilder1 = workPart.Sketches.CreateSketchInPlaceBuilder2(NXOpen.Sketch.Null)
    
    origin1 = NXOpen.Point3d(0.0, 0.0, 0.0)
    normal1 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    plane1 = workPart.Planes.CreatePlane(origin1, normal1, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    sketchInPlaceBuilder1.PlaneReference = plane1
    
    unit1 = workPart.UnitCollection.FindObject("MilliMeter")
    expression1 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression2 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    sketchAlongPathBuilder1 = workPart.Sketches.CreateSketchAlongPathBuilder(NXOpen.Sketch.Null)
    
    sketchAlongPathBuilder1.PlaneLocation.Expression.RightHandSide = "0"
    
    theSession.SetUndoMarkName(markId1, "Create Sketch Dialog")
    
    markId2 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Create Sketch")
    
    theSession.DeleteUndoMark(markId2, None)
    
    markId3 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Create Sketch")
    
    theSession.Preferences.Sketch.CreateInferredConstraints = True
    
    theSession.Preferences.Sketch.ContinuousAutoDimensioning = True
    
    theSession.Preferences.Sketch.DimensionLabel = NXOpen.Preferences.SketchPreferences.DimensionLabelType.Expression
    
    theSession.Preferences.Sketch.TextSizeFixed = True
    
    theSession.Preferences.Sketch.FixedTextSize = 3.0
    
    theSession.Preferences.Sketch.DisplayParenthesesOnReferenceDimensions = True
    
    theSession.Preferences.Sketch.DisplayReferenceGeometry = False
    
    theSession.Preferences.Sketch.ConstraintSymbolSize = 3.0
    
    theSession.Preferences.Sketch.DisplayObjectColor = False
    
    theSession.Preferences.Sketch.DisplayObjectName = True
    
    nXObject1 = sketchInPlaceBuilder1.Commit()
    
    sketch1 = nXObject1
    feature1 = sketch1.Feature
    
    markId4 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "update")
    
    nErrs1 = theSession.UpdateManager.DoUpdate(markId4)
    
    sketch1.Activate(NXOpen.Sketch.ViewReorient.TrueValue)
    
    theSession.DeleteUndoMark(markId3, None)
    
    theSession.SetUndoMarkName(markId1, "Create Sketch")
    
    sketchInPlaceBuilder1.Destroy()
    
    sketchAlongPathBuilder1.Destroy()
    
    try:
        # Expression is still in use.
        workPart.Expressions.Delete(expression2)
    except NXOpen.NXException as ex:
        ex.AssertErrorCode(1050029)
        
    try:
        # Expression is still in use.
        workPart.Expressions.Delete(expression1)
    except NXOpen.NXException as ex:
        ex.AssertErrorCode(1050029)
        
    plane1.DestroyPlane()
    
    # ----------------------------------------------
    #   Menu: Insert->Sketch Curve->Rectangle...
    # ----------------------------------------------
    markId5 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Profile short list")
    
    markId6 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Create Rectangle")
    
    theSession.SetUndoMarkVisibility(markId6, "Create Rectangle", NXOpen.Session.MarkVisibility.Visible)
    
    # ----------------------------------------------
    # Creating rectangle using By 2 Points method 
    # ----------------------------------------------
    startPoint1 = NXOpen.Point3d(0.0, 0.0, 0.0)
    endPoint1 = NXOpen.Point3d(85.0, 0.0, 0.0)
    line1 = workPart.Curves.CreateLine(startPoint1, endPoint1)
    
    startPoint2 = NXOpen.Point3d(85.0, 0.0, 0.0)
    endPoint2 = NXOpen.Point3d(85.0, 67.0, 0.0)
    line2 = workPart.Curves.CreateLine(startPoint2, endPoint2)
    
    startPoint3 = NXOpen.Point3d(85.0, 67.0, 0.0)
    endPoint3 = NXOpen.Point3d(0.0, 67.0, 0.0)
    line3 = workPart.Curves.CreateLine(startPoint3, endPoint3)
    
    startPoint4 = NXOpen.Point3d(0.0, 67.0, 0.0)
    endPoint4 = NXOpen.Point3d(0.0, 0.0, 0.0)
    line4 = workPart.Curves.CreateLine(startPoint4, endPoint4)
    
    theSession.ActiveSketch.AddGeometry(line1, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    
    theSession.ActiveSketch.AddGeometry(line2, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    
    theSession.ActiveSketch.AddGeometry(line3, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    
    theSession.ActiveSketch.AddGeometry(line4, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    
    geom1_1 = NXOpen.Sketch.ConstraintGeometry()
    
    geom1_1.Geometry = line1
    geom1_1.PointType = NXOpen.Sketch.ConstraintPointType.EndVertex
    geom1_1.SplineDefiningPointIndex = 0
    geom2_1 = NXOpen.Sketch.ConstraintGeometry()
    
    geom2_1.Geometry = line2
    geom2_1.PointType = NXOpen.Sketch.ConstraintPointType.StartVertex
    geom2_1.SplineDefiningPointIndex = 0
    sketchGeometricConstraint1 = theSession.ActiveSketch.CreateCoincidentConstraint(geom1_1, geom2_1)
    
    geom1_2 = NXOpen.Sketch.ConstraintGeometry()
    
    geom1_2.Geometry = line2
    geom1_2.PointType = NXOpen.Sketch.ConstraintPointType.EndVertex
    geom1_2.SplineDefiningPointIndex = 0
    geom2_2 = NXOpen.Sketch.ConstraintGeometry()
    
    geom2_2.Geometry = line3
    geom2_2.PointType = NXOpen.Sketch.ConstraintPointType.StartVertex
    geom2_2.SplineDefiningPointIndex = 0
    sketchGeometricConstraint2 = theSession.ActiveSketch.CreateCoincidentConstraint(geom1_2, geom2_2)
    
    geom1_3 = NXOpen.Sketch.ConstraintGeometry()
    
    geom1_3.Geometry = line3
    geom1_3.PointType = NXOpen.Sketch.ConstraintPointType.EndVertex
    geom1_3.SplineDefiningPointIndex = 0
    geom2_3 = NXOpen.Sketch.ConstraintGeometry()
    
    geom2_3.Geometry = line4
    geom2_3.PointType = NXOpen.Sketch.ConstraintPointType.StartVertex
    geom2_3.SplineDefiningPointIndex = 0
    sketchGeometricConstraint3 = theSession.ActiveSketch.CreateCoincidentConstraint(geom1_3, geom2_3)
    
    geom1_4 = NXOpen.Sketch.ConstraintGeometry()
    
    geom1_4.Geometry = line4
    geom1_4.PointType = NXOpen.Sketch.ConstraintPointType.EndVertex
    geom1_4.SplineDefiningPointIndex = 0
    geom2_4 = NXOpen.Sketch.ConstraintGeometry()
    
    geom2_4.Geometry = line1
    geom2_4.PointType = NXOpen.Sketch.ConstraintPointType.StartVertex
    geom2_4.SplineDefiningPointIndex = 0
    sketchGeometricConstraint4 = theSession.ActiveSketch.CreateCoincidentConstraint(geom1_4, geom2_4)
    
    geom1 = NXOpen.Sketch.ConstraintGeometry()
    
    geom1.Geometry = line1
    geom1.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    geom1.SplineDefiningPointIndex = 0
    sketchGeometricConstraint5 = theSession.ActiveSketch.CreateHorizontalConstraint(geom1)
    
    conGeom1_1 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom1_1.Geometry = line1
    conGeom1_1.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom1_1.SplineDefiningPointIndex = 0
    conGeom2_1 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom2_1.Geometry = line2
    conGeom2_1.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom2_1.SplineDefiningPointIndex = 0
    sketchGeometricConstraint6 = theSession.ActiveSketch.CreatePerpendicularConstraint(conGeom1_1, conGeom2_1)
    
    conGeom1_2 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom1_2.Geometry = line2
    conGeom1_2.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom1_2.SplineDefiningPointIndex = 0
    conGeom2_2 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom2_2.Geometry = line3
    conGeom2_2.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom2_2.SplineDefiningPointIndex = 0
    sketchGeometricConstraint7 = theSession.ActiveSketch.CreatePerpendicularConstraint(conGeom1_2, conGeom2_2)
    
    conGeom1_3 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom1_3.Geometry = line3
    conGeom1_3.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom1_3.SplineDefiningPointIndex = 0
    conGeom2_3 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom2_3.Geometry = line4
    conGeom2_3.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom2_3.SplineDefiningPointIndex = 0
    sketchGeometricConstraint8 = theSession.ActiveSketch.CreatePerpendicularConstraint(conGeom1_3, conGeom2_3)
    
    conGeom1_4 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom1_4.Geometry = line4
    conGeom1_4.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom1_4.SplineDefiningPointIndex = 0
    conGeom2_4 = NXOpen.Sketch.ConstraintGeometry()
    
    conGeom2_4.Geometry = line1
    conGeom2_4.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    conGeom2_4.SplineDefiningPointIndex = 0
    sketchGeometricConstraint9 = theSession.ActiveSketch.CreatePerpendicularConstraint(conGeom1_4, conGeom2_4)
    
    geom1_5 = NXOpen.Sketch.ConstraintGeometry()
    
    geom1_5.Geometry = line1
    geom1_5.PointType = NXOpen.Sketch.ConstraintPointType.StartVertex
    geom1_5.SplineDefiningPointIndex = 0
    geom2_5 = NXOpen.Sketch.ConstraintGeometry()
    
    datumCsys1 = workPart.Features.FindObject("SKETCH(1:1B)")
    point1 = datumCsys1.FindObject("POINT 1")
    geom2_5.Geometry = point1
    geom2_5.PointType = NXOpen.Sketch.ConstraintPointType.NotSet
    geom2_5.SplineDefiningPointIndex = 0
    sketchGeometricConstraint10 = theSession.ActiveSketch.CreateCoincidentConstraint(geom1_5, geom2_5)
    
    dimObject1_1 = NXOpen.Sketch.DimensionGeometry()
    
    dimObject1_1.Geometry = line1
    dimObject1_1.AssocType = NXOpen.Sketch.AssocType.StartPoint
    dimObject1_1.AssocValue = 0
    dimObject1_1.HelpPoint.X = 0.0
    dimObject1_1.HelpPoint.Y = 0.0
    dimObject1_1.HelpPoint.Z = 0.0
    dimObject1_1.View = NXOpen.NXObject.Null
    dimObject2_1 = NXOpen.Sketch.DimensionGeometry()
    
    dimObject2_1.Geometry = line1
    dimObject2_1.AssocType = NXOpen.Sketch.AssocType.EndPoint
    dimObject2_1.AssocValue = 0
    dimObject2_1.HelpPoint.X = 0.0
    dimObject2_1.HelpPoint.Y = 0.0
    dimObject2_1.HelpPoint.Z = 0.0
    dimObject2_1.View = NXOpen.NXObject.Null
    dimOrigin1 = NXOpen.Point3d(42.5, -9.9127498431313548, 0.0)
    sketchDimensionalConstraint1 = theSession.ActiveSketch.CreateDimension(NXOpen.Sketch.ConstraintType.ParallelDim, dimObject1_1, dimObject2_1, dimOrigin1, NXOpen.Expression.Null, NXOpen.Sketch.DimensionOption.CreateAsAutomatic)
    
    sketchHelpedDimensionalConstraint1 = sketchDimensionalConstraint1
    dimension1 = sketchHelpedDimensionalConstraint1.AssociatedDimension
    
    expression3 = sketchHelpedDimensionalConstraint1.AssociatedExpression
    
    dimObject1_2 = NXOpen.Sketch.DimensionGeometry()
    
    dimObject1_2.Geometry = line2
    dimObject1_2.AssocType = NXOpen.Sketch.AssocType.StartPoint
    dimObject1_2.AssocValue = 0
    dimObject1_2.HelpPoint.X = 0.0
    dimObject1_2.HelpPoint.Y = 0.0
    dimObject1_2.HelpPoint.Z = 0.0
    dimObject1_2.View = NXOpen.NXObject.Null
    dimObject2_2 = NXOpen.Sketch.DimensionGeometry()
    
    dimObject2_2.Geometry = line2
    dimObject2_2.AssocType = NXOpen.Sketch.AssocType.EndPoint
    dimObject2_2.AssocValue = 0
    dimObject2_2.HelpPoint.X = 0.0
    dimObject2_2.HelpPoint.Y = 0.0
    dimObject2_2.HelpPoint.Z = 0.0
    dimObject2_2.View = NXOpen.NXObject.Null
    dimOrigin2 = NXOpen.Point3d(94.912749843131351, 33.5, 0.0)
    sketchDimensionalConstraint2 = theSession.ActiveSketch.CreateDimension(NXOpen.Sketch.ConstraintType.ParallelDim, dimObject1_2, dimObject2_2, dimOrigin2, NXOpen.Expression.Null, NXOpen.Sketch.DimensionOption.CreateAsAutomatic)
    
    sketchHelpedDimensionalConstraint2 = sketchDimensionalConstraint2
    dimension2 = sketchHelpedDimensionalConstraint2.AssociatedDimension
    
    expression4 = sketchHelpedDimensionalConstraint2.AssociatedExpression
    
    theSession.Preferences.Sketch.AutoDimensionsToArcCenter = False
    
    theSession.ActiveSketch.Update()
    
    theSession.Preferences.Sketch.AutoDimensionsToArcCenter = True
    
    geoms1 = [NXOpen.SmartObject.Null] * 4 
    geoms1[0] = line1
    geoms1[1] = line2
    geoms1[2] = line3
    geoms1[3] = line4
    theSession.ActiveSketch.UpdateConstraintDisplay(geoms1)
    
    geoms2 = [NXOpen.SmartObject.Null] * 4 
    geoms2[0] = line1
    geoms2[1] = line2
    geoms2[2] = line3
    geoms2[3] = line4
    theSession.ActiveSketch.UpdateDimensionDisplay(geoms2)
    
    markId7 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    parallelDimension1 = dimension2
    sketchLinearDimensionBuilder1 = workPart.Sketches.CreateLinearDimensionBuilder(parallelDimension1)
    
    sketchLinearDimensionBuilder1.Driving.DrivingMethod = NXOpen.Annotations.DrivingValueBuilder.DrivingValueMethod.Inferred
    
    sketchLinearDimensionBuilder1.Driving.DrivingMethod = NXOpen.Annotations.DrivingValueBuilder.DrivingValueMethod.Driving
    
    theSession.SetUndoMarkName(markId7, "Linear Dimension Dialog")
    
    sketchLinearDimensionBuilder1.Origin.SetInferRelativeToGeometry(True)
    
    sketchLinearDimensionBuilder1.Driving.ExpressionName = "p6"
    
    dimensionlinearunits1 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits2 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    sketchLinearDimensionBuilder1.Style.OrdinateStyle.DoglegCreationOption = NXOpen.Annotations.OrdinateDoglegCreationOption.No
    
    dimensionlinearunits3 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits4 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits5 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits6 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    sketchLinearDimensionBuilder1.Origin.SetInferRelativeToGeometry(True)
    
    sketchLinearDimensionBuilder1.Origin.SetInferRelativeToGeometry(True)
    
    sketchLinearDimensionBuilder1.Measurement.Direction = NXOpen.Direction.Null
    
    sketchLinearDimensionBuilder1.Measurement.DirectionView = NXOpen.View.Null
    
    sketchLinearDimensionBuilder1.Origin.SetInferRelativeToGeometry(True)
    
    dimensionlinearunits7 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits8 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits9 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits10 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits11 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits12 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits13 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits14 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits15 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits16 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits17 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits18 = sketchLinearDimensionBuilder1.Style.UnitsStyle.DimensionLinearUnits
    
    # ----------------------------------------------
    #   Dialog Begin Linear Dimension
    # ----------------------------------------------
    markId8 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    theSession.DeleteUndoMark(markId8, None)
    
    markId9 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    sketchLinearDimensionBuilder1.Driving.ExpressionValue.RightHandSide = "50"
    
    sketchLinearDimensionBuilder1.Driving.ExpressionValue.RightHandSide = "50"
    
    sketchLinearDimensionBuilder1.Driving.ExpressionMode = NXOpen.Annotations.DrivingValueBuilder.DrivingExpressionMode.KeepExpression
    
    sketchLinearDimensionBuilder1.Origin.SetInferRelativeToGeometry(True)
    
    nXObject2 = sketchLinearDimensionBuilder1.Commit()
    
    point1_1 = NXOpen.Point3d(63.432835820895527, 0.0, 0.0)
    point2_1 = NXOpen.Point3d(0.0, 0.0, 0.0)
    sketchLinearDimensionBuilder1.FirstAssociativity.SetValue(NXOpen.InferSnapType.SnapType.Start, line2, NXOpen.View.Null, point1_1, NXOpen.TaggedObject.Null, NXOpen.View.Null, point2_1)
    
    point1_2 = NXOpen.Point3d(63.432835820895527, 50.0, 0.0)
    point2_2 = NXOpen.Point3d(0.0, 0.0, 0.0)
    sketchLinearDimensionBuilder1.SecondAssociativity.SetValue(NXOpen.InferSnapType.SnapType.End, line2, NXOpen.View.Null, point1_2, NXOpen.TaggedObject.Null, NXOpen.View.Null, point2_2)
    
    theSession.SetUndoMarkName(markId9, "Linear Dimension - =")
    
    theSession.SetUndoMarkVisibility(markId9, None, NXOpen.Session.MarkVisibility.Visible)
    
    theSession.SetUndoMarkVisibility(markId7, None, NXOpen.Session.MarkVisibility.Invisible)
    
    markId10 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    markId11 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    nXObject3 = sketchLinearDimensionBuilder1.Commit()
    
    theSession.DeleteUndoMark(markId11, None)
    
    theSession.SetUndoMarkName(markId7, "Linear Dimension")
    
    expression5 = sketchLinearDimensionBuilder1.Driving.ExpressionValue
    sketchLinearDimensionBuilder1.Destroy()
    
    theSession.DeleteUndoMark(markId10, None)
    
    theSession.SetUndoMarkVisibility(markId7, None, NXOpen.Session.MarkVisibility.Visible)
    
    theSession.DeleteUndoMark(markId9, None)
    
    markId12 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    parallelDimension2 = dimension1
    sketchLinearDimensionBuilder2 = workPart.Sketches.CreateLinearDimensionBuilder(parallelDimension2)
    
    sketchLinearDimensionBuilder2.Driving.DrivingMethod = NXOpen.Annotations.DrivingValueBuilder.DrivingValueMethod.Inferred
    
    sketchLinearDimensionBuilder2.Driving.DrivingMethod = NXOpen.Annotations.DrivingValueBuilder.DrivingValueMethod.Driving
    
    theSession.SetUndoMarkName(markId12, "Linear Dimension Dialog")
    
    sketchLinearDimensionBuilder2.Origin.SetInferRelativeToGeometry(True)
    
    sketchLinearDimensionBuilder2.Driving.ExpressionName = "p7"
    
    dimensionlinearunits19 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits20 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    sketchLinearDimensionBuilder2.Style.OrdinateStyle.DoglegCreationOption = NXOpen.Annotations.OrdinateDoglegCreationOption.No
    
    dimensionlinearunits21 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits22 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits23 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits24 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    sketchLinearDimensionBuilder2.Origin.SetInferRelativeToGeometry(True)
    
    sketchLinearDimensionBuilder2.Origin.SetInferRelativeToGeometry(True)
    
    sketchLinearDimensionBuilder2.Measurement.Direction = NXOpen.Direction.Null
    
    sketchLinearDimensionBuilder2.Measurement.DirectionView = NXOpen.View.Null
    
    sketchLinearDimensionBuilder2.Origin.SetInferRelativeToGeometry(True)
    
    dimensionlinearunits25 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits26 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits27 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits28 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits29 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits30 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits31 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits32 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits33 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits34 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits35 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    dimensionlinearunits36 = sketchLinearDimensionBuilder2.Style.UnitsStyle.DimensionLinearUnits
    
    # ----------------------------------------------
    #   Dialog Begin Linear Dimension
    # ----------------------------------------------
    markId13 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    theSession.DeleteUndoMark(markId13, None)
    
    markId14 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    sketchLinearDimensionBuilder2.Driving.ExpressionValue.RightHandSide = "50"
    
    sketchLinearDimensionBuilder2.Driving.ExpressionValue.RightHandSide = "50"
    
    sketchLinearDimensionBuilder2.Driving.ExpressionMode = NXOpen.Annotations.DrivingValueBuilder.DrivingExpressionMode.KeepExpression
    
    sketchLinearDimensionBuilder2.Origin.SetInferRelativeToGeometry(True)
    
    nXObject4 = sketchLinearDimensionBuilder2.Commit()
    
    point1_3 = NXOpen.Point3d(0.0, 0.0, 0.0)
    point2_3 = NXOpen.Point3d(0.0, 0.0, 0.0)
    sketchLinearDimensionBuilder2.FirstAssociativity.SetValue(NXOpen.InferSnapType.SnapType.Start, line1, NXOpen.View.Null, point1_3, NXOpen.TaggedObject.Null, NXOpen.View.Null, point2_3)
    
    point1_4 = NXOpen.Point3d(50.0, 0.0, 0.0)
    point2_4 = NXOpen.Point3d(0.0, 0.0, 0.0)
    sketchLinearDimensionBuilder2.SecondAssociativity.SetValue(NXOpen.InferSnapType.SnapType.End, line1, NXOpen.View.Null, point1_4, NXOpen.TaggedObject.Null, NXOpen.View.Null, point2_4)
    
    theSession.SetUndoMarkName(markId14, "Linear Dimension - =")
    
    theSession.SetUndoMarkVisibility(markId14, None, NXOpen.Session.MarkVisibility.Visible)
    
    theSession.SetUndoMarkVisibility(markId12, None, NXOpen.Session.MarkVisibility.Invisible)
    
    markId15 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    # ----------------------------------------------
    #   Menu: Help->On Context...
    # ----------------------------------------------
    # ----------------------------------------------
    #   Menu: Insert->Design Feature->Extrude...
    # ----------------------------------------------
    markId16 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Linear Dimension")
    
    nXObject5 = sketchLinearDimensionBuilder2.Commit()
    
    theSession.DeleteUndoMark(markId16, None)
    
    theSession.SetUndoMarkName(markId12, "Linear Dimension")
    
    expression6 = sketchLinearDimensionBuilder2.Driving.ExpressionValue
    sketchLinearDimensionBuilder2.Destroy()
    
    theSession.DeleteUndoMark(markId15, None)
    
    theSession.SetUndoMarkVisibility(markId12, None, NXOpen.Session.MarkVisibility.Visible)
    
    theSession.DeleteUndoMark(markId14, None)
    
    markId17 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    extrudeBuilder1 = workPart.Features.CreateExtrudeBuilder(NXOpen.Features.Feature.Null)
    
    section1 = workPart.Sections.CreateSection(0.0094999999999999998, 0.01, 0.5)
    
    extrudeBuilder1.Section = section1
    
    extrudeBuilder1.AllowSelfIntersectingSection(True)
    
    unit2 = extrudeBuilder1.Draft.FrontDraftAngle.Units
    
    expression7 = workPart.Expressions.CreateSystemExpressionWithUnits("2.00", unit2)
    
    extrudeBuilder1.DistanceTolerance = 0.01
    
    extrudeBuilder1.BooleanOperation.Type = NXOpen.GeometricUtilities.BooleanOperation.BooleanType.Create
    
    targetBodies1 = [NXOpen.Body.Null] * 1 
    targetBodies1[0] = NXOpen.Body.Null
    extrudeBuilder1.BooleanOperation.SetTargetBodies(targetBodies1)
    
    extrudeBuilder1.Limits.StartExtend.Value.RightHandSide = "0"
    
    extrudeBuilder1.Limits.EndExtend.Value.RightHandSide = "25"
    
    extrudeBuilder1.Draft.FrontDraftAngle.RightHandSide = "2"
    
    extrudeBuilder1.Draft.BackDraftAngle.RightHandSide = "2"
    
    extrudeBuilder1.Offset.StartOffset.RightHandSide = "0"
    
    extrudeBuilder1.Offset.EndOffset.RightHandSide = "5"
    
    smartVolumeProfileBuilder1 = extrudeBuilder1.SmartVolumeProfile
    
    smartVolumeProfileBuilder1.OpenProfileSmartVolumeOption = False
    
    smartVolumeProfileBuilder1.CloseProfileRule = NXOpen.GeometricUtilities.SmartVolumeProfileBuilder.CloseProfileRuleType.Fci
    
    theSession.SetUndoMarkName(markId17, "Extrude Dialog")
    
    section1.DistanceTolerance = 0.01
    
    section1.ChainingTolerance = 0.0094999999999999998
    
    section1.SetAllowedEntityTypes(NXOpen.Section.AllowTypes.OnlyCurves)
    
    markId18 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, None)
    
    curves1 = [NXOpen.ICurve.Null] * 4 
    curves1[0] = line4
    curves1[1] = line2
    curves1[2] = line3
    curves1[3] = line1
    seedPoint1 = NXOpen.Point3d(16.666666666666668, 16.666666666666668, 0.0)
    regionBoundaryRule1 = workPart.ScRuleFactory.CreateRuleRegionBoundary(theSession.ActiveSketch, curves1, seedPoint1, 0.01)
    
    section1.AllowSelfIntersection(True)
    
    rules1 = [None] * 1 
    rules1[0] = regionBoundaryRule1
    helpPoint1 = NXOpen.Point3d(0.0, 0.0, 0.0)
    section1.AddToSection(rules1, NXOpen.NXObject.Null, NXOpen.NXObject.Null, NXOpen.NXObject.Null, helpPoint1, NXOpen.Section.Mode.Create, False)
    
    theSession.DeleteUndoMark(markId18, None)
    
    markId19 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "section mark")
    
    markId20 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, None)
    
    theSession.DeleteUndoMark(markId20, None)
    
    direction1 = workPart.Directions.CreateDirection(theSession.ActiveSketch, NXOpen.Sense.Forward, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    extrudeBuilder1.Direction = direction1
    
    expression8 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    theSession.DeleteUndoMark(markId19, None)
    
    extrudeBuilder1.Limits.EndExtend.Value.RightHandSide = "50"
    
    markId21 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Extrude")
    
    theSession.DeleteUndoMark(markId21, None)
    
    markId22 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Extrude")
    
    extrudeBuilder1.ParentFeatureInternal = False
    
    markId23 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Deactivate Sketch")
    
    feature2 = extrudeBuilder1.CommitFeature()
    
    theSession.DeleteUndoMark(markId22, None)
    
    theSession.SetUndoMarkName(markId17, "Extrude")
    
    expression9 = extrudeBuilder1.Limits.StartExtend.Value
    expression10 = extrudeBuilder1.Limits.EndExtend.Value
    extrudeBuilder1.Destroy()
    
    workPart.Expressions.Delete(expression7)
    
    workPart.Expressions.Delete(expression8)
    
    rotMatrix1 = NXOpen.Matrix3x3()
    
    rotMatrix1.Xx = 0.7545113044785895
    rotMatrix1.Xy = -0.057092274785294876
    rotMatrix1.Xz = -0.6537990238397855
    rotMatrix1.Yx = -0.31530173849149706
    rotMatrix1.Yy = 0.84217253284546478
    rotMatrix1.Yz = -0.43741312123082549
    rotMatrix1.Zx = 0.57558448999104839
    rotMatrix1.Zy = 0.53617711353665021
    rotMatrix1.Zz = 0.61742740285903142
    translation1 = NXOpen.Point3d(23.909499853662272, 22.763558171921446, -18.229725159668249)
    workPart.ModelingViews.WorkView.SetRotationTranslationScale(rotMatrix1, translation1, 0.90792163046827923)
    
    # ----------------------------------------------
    #   Menu: Tools->Journal->Stop Recording
    # ----------------------------------------------
    
if __name__ == '__main__':
    main()